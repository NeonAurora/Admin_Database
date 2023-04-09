const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/add", upload.single("audio"), async (req, res) => {
  try {
    const audioMetadata = {
      fileUrl: req.file.path,
      title: req.body.title,
      duration: req.body.duration,
      format: req.body.format,
      bitrate: req.body.bitrate,
      sampleRate: req.body.sampleRate,
      channels: req.body.channels,
      fileSize: req.body.fileSize,
    };

    const transactionData = JSON.parse(req.body.transactionData);
    const newTransaction = new Transaction({
      ...transactionData,
      audioMetadata,
    });
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    const { audioMetadata } = transaction;
    if (!audioMetadata) {
      return res.status(404).json({ message: "Audio not found" });
    }

    const audioUrl = `http://${
      req.headers.host
    }/${audioMetadata.fileUrl.replace(/\\/g, "/")}`;

    res.json({ transactionData: transaction, audioUrl });
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Transaction.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
