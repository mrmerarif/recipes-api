// db/connect.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('Missing MONGODB_URI environment variable');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✓ Connected to MongoDB using Mongoose');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Stop the app if DB fails
  }
};

module.exports = connectDB;
