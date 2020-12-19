console.log(`it's aliveeeeee!`);

$(document).ready(handleReady);


//make a handle ready function to handle clicks
function handleReady() {
 
  getPeople();

  console.log("4?");
  $("#submit").on("click", handleAddFriend);
}
//end handle ready