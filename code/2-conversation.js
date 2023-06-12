// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  let answer = prompt('Do you like reading? Answer yes or no.')

  if (answer == 'yes') {
    alert("That's good - you will learn many things.")
    let secondQuestion = prompt('Do you like the movie adaptations of the books? Answer yes or no.')
    if (secondQuestion == 'yes') {
      alert('Cool! Watching movies after reading the books is fun.')
    } else {
      alert('That is understandable.')
    }
  } else {
    alert('Perhaps you like movies instead.')
    let thirdQuestion = prompt('Do you watch series too? Answer yes or no.')
    if (thirdQuestion == 'yes') {
      alert('Great! I love watching series too!')
    } else {
    alert("That's too bad.")
  }

  alert('Goodbye')
  }
}

function age() {
  // write your code here
}
