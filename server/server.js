/** @format */

const express = require("express");

const app = express();

// app.listen(5000);

app.listen(process.env.PORT || 5000, () => {
  console.log(`listen on port ${process.env.PORT || 5000}`);
});

app.get("/", (req, res) => {
  res.send("Home page");
});
