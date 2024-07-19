const mongoose = require("mongoose");

const dbPath = "mongodb://localhost:27017/mongoose-sample";

const connectDB = async () => {
  try {
    await mongoose.connect(dbPath);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
