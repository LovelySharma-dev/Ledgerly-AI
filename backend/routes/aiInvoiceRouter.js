const express = require("express");
const { GoogleGenAI, Type } = require("@google/genai");

const aiInvoiceRouter = express.Router();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.log("No Gemini Key found in the .env");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MODEL_CANDIDATES = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-001",
];

const invoiceSchema = {
  type: Type.OBJECT,
  properties: {
    invoiceNumber: { type: Type.STRING },
    issueDate: { type: Type.STRING },
    dueDate: { type: Type.STRING },
    fromBusinessName: { type: Type.STRING },
    fromEmail: { type: Type.STRING },
    fromAddress: { type: Type.STRING },
    fromPhone: { type: Type.STRING },
    client: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING },
        email: { type: Type.STRING },
        address: { type: Type.STRING },
        phone: { type: Type.STRING },
      },
      required: ["name"],
    },
    items: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          description: { type: Type.STRING },
          qty: { type: Type.NUMBER },
          unitPrice: { type: Type.NUMBER },
        },
        required: ["id", "description", "qty", "unitPrice"],
      },
    },
    taxPercent: { type: Type.NUMBER },
    notes: { type: Type.STRING },
  },
  required: ["invoiceNumber", "issueDate", "items"],
};

function buildInvoicePrompt(promptText) {
  const defaults = {
    invoiceNumber: `INV-${Math.floor(Math.random() * 9000) + 1000}`,
    issueDate: new Date().toISOString().slice(0, 10),
    taxPercent: 18,
  };

  return `
You are an invoice generation assistant.

Task:
  - Analyze the user's input text and produce an invoice matching the required schema.
  - Ensure all dates are ISO 'YYYY-MM-DD' strings and numeric fields are numbers.
  - If the user doesn't specify these, use these defaults: ${JSON.stringify(defaults)}.
  - Leave any field you cannot infer from the input as an empty string (or 0 for numbers), but still include it.

User input:
${promptText}
`;
}

aiInvoiceRouter.post("/generate", async (req, res) => {
  try {
    if (!API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Server configuration failed no key found",
      });
    }

    const { prompt } = req.body;
    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        message: "Prompt text required",
      });
    }

    const fullPrompt = buildInvoicePrompt(prompt);

    async function tryGenerateWithModel(modelName, prompt) {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: invoiceSchema,
        },
      });

      const text =
        response && typeof response.text === "string"
          ? response.text.trim()
          : "";
      if (!text) {
        throw new Error("Empty text returned from model");
      }
      return { text, modelName };
    }

    let lastErr = null;
    let lastText = null;
    let usedModel = null;

    for (const m of MODEL_CANDIDATES) {
      try {
        const { text, modelName } = await tryGenerateWithModel(m, fullPrompt);
        lastText = text;
        usedModel = modelName;
        break;
      } catch (err) {
        console.warn(`Model ${m} failed:`, err?.message || err);
        lastErr = err;
        continue;
      }
    }

    if (!lastText) {
      const errMsg =
        (lastErr && lastErr.message) ||
        "All candidate models failed. Check API key, network, or model availability.";
      console.error("AI generation failed (no text):", errMsg);
      return res.status(502).json({
        success: false,
        message: "AI generation failed",
        detail: errMsg,
      });
    }

    let data;
    try {
      data = JSON.parse(lastText);
    } catch (error) {
      console.log("Failed to parse JSON from AI response:", error, {
        model: usedModel,
        lastText,
      });
      return res.status(502).json({
        success: false,
        message: "AI returned invalid JSON",
        model: usedModel,
        raw: lastText,
      });
    }

    return res.status(200).json({
      success: true,
      model: usedModel,
      data,
    });
  } catch (error) {
    console.log("AI invoice generation error:", error);
    return res.status(500).json({
      success: false,
      message: "AI generation failed",
      detail: error?.message || String(error),
    });
  }
});

module.exports = aiInvoiceRouter;
