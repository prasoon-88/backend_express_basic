const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("@prasoon.asati");
});

app.get("/login", (req, res) => {
  res.send("<h1>Logged in PRASOON.com</h1>");
});

app.get("/chai", (req, res) => {
  res.send("<h1>CHai AUr COde</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
