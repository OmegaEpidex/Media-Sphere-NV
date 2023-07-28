const mongoose = require('mongoose');

// Replace 'YOUR_MONGODB_URI' with your actual MongoDB connection URI
const MONGODB_URI = 'YOUR_MONGODB_URI';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application if there is an error in the database connection
  }
};

module.exports = connectDB;
