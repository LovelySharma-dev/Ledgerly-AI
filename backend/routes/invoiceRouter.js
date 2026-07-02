const express = require("express");
const { clerkMiddleware } = require("@clerk/express");
const {
  getInvoice,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/InvoiceController");

const invoiceRouter = express.Router();

invoiceRouter.use(clerkMiddleware());

invoiceRouter.get("/", getInvoice);
invoiceRouter.get("/:id", getInvoiceById);
invoiceRouter.post("/", createInvoice);
invoiceRouter.put("/", updateInvoice);
invoiceRouter.delete("/:id", deleteInvoice);

module.exports = invoiceRouter;
