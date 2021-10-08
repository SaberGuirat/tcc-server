//dependencies
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const helmet = require("helmet");

// init express app
const app = express();

// connect to DB
connectDB();

//init middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//routes
app.use("/api/users", require("./routes/userRouter.js"));

// run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  error
    ? console.log("Connection failed")
    : console.log(`Server is running on port ${PORT}`);
});
