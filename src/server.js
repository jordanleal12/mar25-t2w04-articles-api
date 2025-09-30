const express = require("express");
const app = express();
const helmet = require("helmet");

// Default helmet settings do alot of basic security config
app.use(helmet());

// Cors to help limit what front-ends can access our API
const cors = require("cors");
let corsOptions = {
  origin: [
    "http://localhost:5000",
    "https://deployedReactApp.com", // <- replace with your deployed front-end
  ],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Receive json body data on requests
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get(/.*/, (req, res) => {
  res.status(404).json({
    message: "Route not found in this API!",
    targetPath: req.path,
  });
});

module.exports = { app };
