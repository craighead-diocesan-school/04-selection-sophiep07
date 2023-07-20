// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt("What is your name?")
  //asks the user their name

  let capital = prompt("Quick question, " + name + ". What is the capital of France? Capitals matter.")
  //asks them what the capital of frace is using their name

  if (capital == "Paris") {
    alert("You are correct, " + name + ".")
  } else {
    alert("You are wrong, " + name + ".")
  }
  //outputs and tells the user if they answered right or wrong
}
