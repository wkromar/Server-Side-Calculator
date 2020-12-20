console.log(`it's aliveeeeee!`);

$(document).ready(handleReady);

let dataToSend = {};
//make a handle ready function to handle clicks
function handleReady() {
//   console.log("4?");
  $(document).on("click","#equals", userInputs);
  $(document).on("click","#targetAdd", addChosen);
  $(document).on("click","#subtract", subtractChosen);
  $(document).on("click","#multiply", multiplyChosen);
  $(document).on("click","#divide", divideChosen);
}
//end handle ready
//package up data from user
function userInputs(){
console.log('clicked, adding user input');
dataToSend.numberOne = $("#firstNumberIn").val(),
dataToSend.numberTwo =  $("#secondNumberIn").val(),

console.log(dataToSend);
// send values to server

$.ajax({
    url: "/mathToServer",
    type: 'POST',
    data: dataToSend,
}).then(function(response){
    console.log(response);
    console.log('data to server', 201);
})
return dataToSend
} //data packaged into an object and sent to server. user input end

// ----------------------------------------------------------------------------

//package up the math operator chosen
// function mathInput(){
    function addChosen(){
        console.log('clicked +');
            // dataToSend.operator.empty().
            dataToSend.operator = "+"

    }
    function subtractChosen(){
        console.log('clicked -');
            // dataToSend.operator.empty().
            dataToSend.operator = "-"
    }
    function multiplyChosen(){
        console.log('clicked *');
            // dataToSend.operator.empty().
            dataToSend.operator = "*"
    }
    function divideChosen(){
        console.log('clicked /');
            // dataToSend.operator.empty().
            dataToSend.operator = "/"
    }

