// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("attempting to connect to db");
    await mongoose.connect('mongodb://127.0.0.1:27017/nextAssess', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
