/** @format */

import express from "express";
import config from "./config";
import router from "./routes/index.js"; // Importing router from the routes directory

const app = express();

app.use(express.json()); // Setting up middleware to parse JSON bodies

// AMount the imported router to handle all requests
app.use("/", router); // This line correctly mounts the router to handle all requests

// Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err); // log the error/s to the console
  const statusCode = err.statusCode || 500; // Use the status code from the error, or default to 500
  res
    .status(statusCode)
    .json({
      error: err.message,
      status: statusCode,
      timestamp: new Date().toISOString(),
    });
});


// Start the server listening on the configured PORT
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
