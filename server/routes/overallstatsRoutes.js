const express = require("express");
const router = express.Router();
const OverallStat = require("../models/OverallState");

// Add a new overall stat
router.post("/add", async (req, res) => {
  try {
    const newStat = new OverallStat(req.body);
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    const stat = await OverallStat.findById(req.params.id);
    if (!stat) {
      return res.status(404).json({ message: "Stat not found" });
    }
    res.json(stat);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error });
  }
});

router.delete("/delete/:_id", async (req, res) => {
  try {
    const data = await OverallStat.findByIdAndDelete(req.params._id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
