// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // write your code here

  let keepGoing = "yes"

  while (keepGoing == "yes") {
    let answer = Number(prompt("What number do you want to compare to two?"))
    //makes the user's input a number

    if (answer > 2) {
      alert(answer + " is greater that two.")
    } else {
      alert(answer + " is less that two.")
    }
    //outputs either message if the input is more or less than 2

    keepGoing = prompt("Do you wanna keep going? Answer yes or no.")
    //starts the loop again if user says yes and stops it if they say no
  }
}
