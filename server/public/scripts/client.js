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
  $(document).on("click","#clearInputs", clearInputs);
  addToDom();
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
    
})
addToDom()
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

//returning data to client to post on dom
function addToDom(){
$.ajax({
    type: 'GET',
    url: '/mathToServer'
}).then(function (response){
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        $('#resultField').append(`
        <ul>
            <li>${response[i].equation}</li>
        </ul>`)
        
    }
    for (let i = 0; i < response.length; i++){
    $('#solution').empty();
    $('#solution').append(`${response[i].results}`)
    }
})
}

//create function to clear inputs from input fields

function clearInputs(){
    $("#firstNumberIn").val(''),
    $("#secondNumberIn").val('')
}