// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // write your code here
  
  let answer = Number(prompt('What number do you want to compare to two?'))

  if (answer > 2) {
    alert(answer + ' is greater that two.')
    let question = prompt('Do you want to go again? Answer yes or no.')
  } else {
    alert(answer + ' is less that two.')
    let question = prompt('Do you want to go again? Answer yes or no.')
  } 

  while (question = yes) {
    let answer = Number(prompt('What number do you want to compare to two?'))

    if (answer > 2) {
      alert(answer + ' is greater that two.')
      let question = prompt('Do you want to go again? Answer yes or no.')
    } else {
      alert(answer + ' is less that two.')
      let question = prompt('Do you want to go again? Answer yes or no.')
  } 
  }
}
