require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const app = express();
const { clerkMiddleware } = require("@clerk/express");
const path = require("path");
const invoiceRouter = require("./routes/invoiceRouter.js");
const businessProfileRouter = require("./routes/businessProfileRouter.js");
const aiInvoiceRouter = require("./routes/aiInvoiceRouter.js");

// DB
connectDB();

// MIDDLEWARE
app.use(cors({ origin: "http://localhost:5173/", credentials: true }));
app.use(clerkMiddleware());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// ROUTES
// uploaded files publicly accessible via URL
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/invoice", invoiceRouter);
app.use("/api/businessProfile", businessProfileRouter);
app.use("/api/ai", aiInvoiceRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

// PORT LISTEn
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
