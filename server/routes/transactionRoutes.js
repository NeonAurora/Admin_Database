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

module.exports = router;

