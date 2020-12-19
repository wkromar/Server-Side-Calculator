//give us ENTIRETY OF express NOT ./
const express = require("express");
const bodyParser = require("body-parser");
// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS, etc
app.use(express.static("server/public"));

app.use(bodyParser.urlencoded({ extended: true }));

//make array to hold answers
mathToDo = [];
mathResults = [];


// app.get("/calculator", (req, res) => {
//   res.send(201);
// });


app.post("/mathToServer", (req, res) => {
  //retrieve new data from client to server
  let mathFromServer = req.body.name;
  console.log(mathFromServer);
  mathToDO.push(mathFromServer);
  // 200 is ok. 201 is CREATED. 400 codes are ERRORS like 404
  res.sendStatus(201);
});//end retrieve


// function mathEquations(){


// }




//START UP SERVER! leave at bottom
app.listen(PORT, () => {
  // this will run when server starts!
  console.log("Server running on PORT", PORT);
});