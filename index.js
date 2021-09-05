require("dotenv").config();
const PORT = process.env.PORT | 8000;
const express = require("express");
const { send } = require("process");
const app = express();

// http:localhost:5000/
app.get("/", (req, res) => {
  res.send("Hey, I am a home page");
});
// http:localhost:5000/about
app.get("/about", (req, res) => {
  res.send("<h1>About page<h1>");
});

app.listen(PORT, () => {
  console.log("this is a live server application");
});
