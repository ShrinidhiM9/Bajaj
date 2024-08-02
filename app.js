// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint for both GET and POST requests
app.route('/api/endpoint')
  .get((req, res) => {
    // Return an operation code for GET requests
    res.json({ operation_code: 'GET_REQUEST_SUCCESS' });
  })
  .post((req, res) => {
    const { status, userId, collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;

    // Validate the request body
    if (!status || !userId || !collegeEmailId || !collegeRollNumber || !numbers || !alphabets) {
      res.status(400).json({ error: 'Missing required fields in the request body' });
      return;
    }

    // Process the request and return the required data
    res.json({
      status,
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets,
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
