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


// app.get("/mathToServer", (req, res) => {
//     console.log();
//   res.send(201);
// });
// function addNumbers(){

//     if (req.body = 1){
//       console.log('add the two numbers');
//       console.log(number(mathToDo.numberOne) + number(mathToDo.numberTwo))
//       console.log(mathToDo.numberOne + ' + ' + mathToDo.numberTwo);
//       mathToDo.val('')
//     //   mathResults.push(mathToDo.numberOne + ' + ' + mathToDo.numberTwo)
//   }
// }

app.post("/mathToServer", (req, res) => {
  //retrieve new data from client, send to server
  let mathFromServer = req.body;
  console.log(mathFromServer);
  mathResults.push(mathFromServer);
  // 200 is ok. 201 is CREATED. 400 codes are ERRORS like 404
  res.sendStatus(201);
});//end retrieve


// // taking number identifiers and passing them into a function
// function grabNumbers(){
// app.get("/mathToServer", (req, res) => {
//   //retrieve new data from client, send to server
  
//   // addNumbers();
//   // 200 is ok. 201 is CREATED. 400 codes are ERRORS like 404
//   res.send()
 
// });//end retrieve
// }
// }




//START UP SERVER! leave at bottom
app.listen(PORT, () => {
  // this will run when server starts!
  console.log("Server running on PORT", PORT);
});