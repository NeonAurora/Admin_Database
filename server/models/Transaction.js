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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
