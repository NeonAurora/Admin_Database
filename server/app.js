require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes/overallStatsRoutes");
const connectDB = require("./config/database");
const transactionRoutes = require("./routes/transactionRoutes");

// Other code...

const app = express();
const PORT = process.env.PORT || 5000;
connectDB(); // connect to mongodb atlas

app.use(bodyParser.json());
app.use(cors());

app.use("/api/overallStats", apiRoutes);
app.use("/api/transactions", transactionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
