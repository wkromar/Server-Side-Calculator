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


const equationLog = [];


app.get("/mathToServer", (req, res) => {
  res.send(equationLog);
  console.log(equationLog);
});

app.post("/mathToServer", (req, res) => {
  //retrieve new data from client, send to server
  let mathFromServer = req.body;
  console.log(mathFromServer);
  let operator = mathFromServer.operator;
  let numOne = Number(mathFromServer.numberOne);
  let numTwo = Number(mathFromServer.numberTwo);
  let results = 0;
    switch (operator){
        case '+':
         results =  numOne + numTwo;
        break;
        case "-":
          results = numOne - numTwo;
        break;
        case "*":
          results = numOne * numTwo;
          break;
        case "/":
          results = numOne / numTwo;
          break;
    }
    let finishedEquation = {
      results: results,
      equation:`${numOne} ${operator} ${numTwo} = ${results}`
    }
  equationLog.push(finishedEquation)
  // console.log(results);
  console.log(finishedEquation);
});//end retrieve


//START UP SERVER! leave at bottom
app.listen(PORT, () => {
  // this will run when server starts!
  console.log("Server running on PORT", PORT);
});