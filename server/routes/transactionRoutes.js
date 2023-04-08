const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.post("/add", async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
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
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
});

router.delete("/delete/:_id", async (req, res) => {
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

