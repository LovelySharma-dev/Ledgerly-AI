const express = require("express");
const multer = require("multer");
const path = require("path");
const { clerkMiddleware } = require("@clerk/express");
const {
  createBusinessProfile,
  updateBusinessProfile,
  getMyBusinessProfile,
} = require("../controllers/businessProfileController.js");

const businessProfileRouter = express.Router();

businessProfileRouter.use(clerkMiddleware);

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const ext = path.extname(file.originalname);

    cb(null, `business-${unique}${ext}`);
  },
});

const upload = multer({ storage });

// create
businessProfileRouter.post(
  "/",
  upload.fields([
    { name: "logoName", maxCount: 1 },
    { name: "stampName", maxCount: 1 },
    { name: "signatureNameMeta", maxCount: 1 },
  ]),

  createBusinessProfile,
);

// to update
businessProfileRouter.put(
  "/:id",
  upload.fields([
    { name: "logoName", maxCount: 1 },
    { name: "stampName", maxCount: 1 },
    { name: "signatureNameMeta", maxCount: 1 },
  ]),
  updateBusinessProfile,
);

businessProfileRouter.get("/me", getMyBusinessProfile);

module.exports = businessProfileRouter;
