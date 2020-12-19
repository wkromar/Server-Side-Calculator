//give us ENTIRETY OF express NOT ./
const express = require("express");
const bodyParser = require("body-parser");
// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS, etc
app.use(express.static("server/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/calculator", (req, res) => {
  res.send(201);
});