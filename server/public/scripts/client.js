console.log(`it's aliveeeeee!`);

$(document).ready(handleReady);


//make a handle ready function to handle clicks
function handleReady() {
 
  

//   console.log("4?");
  $("#equals").on("click", packageData);
}
//end handle ready
//package up data from user



// send to server
$.ajax({
    url: "/mathToServer",
    type: 'POST'
    Data: ,
}).then(function(response){
    console.log(response);
    console.log('data to server', 201);
})
