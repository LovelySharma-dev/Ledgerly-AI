const mongoose = require("mongoose");

// ItemSchema
const ItemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      default: 1,
    },
    unitPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    _id: false,
  },
);

// Invoice Schema
const invoiceSchema = new mongoose.Schema(
  {
    // owner coming from clerk id
    owner: {
      type: String,
      required: true,
      index: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
      index: true, //unique
      unique: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      default: "",
    },
    items: [ItemSchema],
    //Business info
    fromBusinessName: {
      type: String,
      default: "",
    },
    fromEmail: {
      type: String,
      default: "",
    },
    fromAddress: {
      type: String,
      default: "",
    },
    fromPhone: {
      type: String,
      default: "",
    },
    fromGst: {
      type: String,
      default: "",
    },

    // Client info
    client: {
      name: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      address: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
    },

    currency: {
      type: String,
      default: "INR",
    },
    status: {
      type: String,
      enum: ["draft", "unpaid", "paid", "overdue"],
      default: "draft",
    },

    //ASSESTS
    logoDataUrl: {
      type: String,
      default: null,
    },
    stampDataUrl: {
      type: String,
      default: null,
    },
    signatureDataUrl: {
      type: String,
      default: null,
    },

    signatureName: {
      type: String,
      default: "",
    },
    signatureTitle: {
      type: String,
      default: "",
    },

    taxPercent: {
      type: Number,
      default: 18,
    },

    subtotal: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },

    // AI SOURCE TRACKING
    source: {
      type: String,
      enum: ["manual", "ai", "receipt"],
      default: "manual",
    },

    // Notes(for email+API)
    notes: {
      type: String,
      default: "",
    },

    // Reminder System Support
    lastReminderSent: Date,
    reminderCount: {
      type: Number,
      default: 0,
    },

    // AI Confidence
    aiConfidence: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Invoice", invoiceSchema);
