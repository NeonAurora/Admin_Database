require("dotenv").config(); // checked
const express = require("express"); // will be here
const bodyParser = require("body-parser");
const cors = require("cors"); // will be here
const apiRoutes = require("./routes/overallstats"); // Import and use API routes //will be here
// const mongoose = require("mongoose"); // checked
const connectDB = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB(); // connect to mongodb atlas

app.use(bodyParser.json());
app.use(cors());




app.use("/api/overallstats", apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
