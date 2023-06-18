// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // write your code here
  
  let keepGoing = 'yes'

  while (keepGoing == 'yes') {

    let answer = Number(prompt('What number do you want to compare to two?'))

    if (answer > 2) {
      alert(answer + ' is greater that two.')
    } else {
      alert(answer + ' is less that two.')
    } 

    keepGoing = prompt("Do you wanna keep going? Answer yes or no.")

  }
}