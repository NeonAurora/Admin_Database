const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: [
      {
        id: Number,
        productID: String,
      },
    ],
    audioMetadata: {
      title: String,
      duration: Number,
      format: String,
      bitrate: Number,
      sampleRate: Number,
      channels: Number,
      fileSize: Number,
      fileUrl: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
