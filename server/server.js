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

const mathResults = [];
const results = [];


// app.get("/mathToServer", (req, res) => {
//     console.log();
//   res.send(201);
// });

app.post("/mathToServer", (req, res) => {
  //retrieve new data from client, send to server
  let mathFromServer = req.body;
  console.log(mathFromServer);

  if (mathResults.operator === '+'){
     mathFromServer.result = mathFromServer.numberOne + mathFromServer.numberTwo
  }
  else if(mathResults.operator === '-'){
    mathFromServer.result = mathFromServer.numberOne - mathFromServer.numberTwo
  }
  else if(mathResults.operator === '*'){
  mathFromServer.result = mathFromServer.numberOne * mathFromServer.numberTwo
  }
  else if(mathResults.operator === '/'){
    mathFromServer.result = mathFromServer.numberOne / mathFromServer.numberTwo
  }

  results.push(mathFromServer.result)
});//end retrieve


//START UP SERVER! leave at bottom
app.listen(PORT, () => {
  // this will run when server starts!
  console.log("Server running on PORT", PORT);
});