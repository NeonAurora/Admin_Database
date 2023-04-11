const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/add", async (req, res) => {
  try {
    console.log("Request body:", req.body); // Add this line to log the request payload
    const newStat = new User(req.body);
    const savedStat = await newStat.save();
    res.status(201).json(savedStat);
  } catch (error) {
    console.error("Error:", error); // Add this line to log the error message
    res.status(400).json({ message: "Error: " + error });
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    console.log("Request body:", req.body); // Add this line to log the request payload
    const stat = await User.findById(req.params.id);
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
    const data = await User.findByIdAndDelete(req.params._id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const updatedStat = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStat) {
      return res.status(404).json({ message: "Stat not found" });
    }

    res.json(updatedStat);
  } catch (error) {
    res.status(400).json({ message: "Error: " + error });
  }
});

module.exports = router;
