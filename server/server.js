require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes/overallStatsRoutes");
const connectDB = require("./config/database");
const transactionRoutes = require("./routes/transactionRoutes");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
const PORT = process.env.PORT || 5000;
connectDB(); // connect to mongodb atlas

app.use(bodyParser.json());
app.use(cors());

app.use("/api/overallStats", apiRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/uploads", express.static("uploads")); // Add this line to serve audio files

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
