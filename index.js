const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/server", (req, res) => {
  res.send("Welcome Jyoti");
});

const port = process.env.PORT; // || 8001;

app.listen(port, () => {
  console.log("Welcome to the server!");
});