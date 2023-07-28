const app = require('./app'); // Assuming your app is defined in the 'app.js' file
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
