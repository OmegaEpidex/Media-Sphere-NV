const app = require('./app'); // Assuming your app is defined in the 'app.js' file
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

// Connect to MongoDB (replace 'YOUR_MONGODB_URI' with your actual MongoDB connection URI)
mongoose.connect('YOUR_MONGODB_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
  // Start the server after successful MongoDB connection
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});