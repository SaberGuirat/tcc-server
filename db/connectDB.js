const mongoose = require("mongoose");


const URI =
  process.env.MONGODB_URL ||
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to MongoDB database ...");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
