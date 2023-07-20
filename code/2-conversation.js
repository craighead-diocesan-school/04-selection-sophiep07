// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert("Welcome to my conversation program.")

  let answer = prompt("Do you like reading? Answer yes or no.")

  if (answer == "yes") {
    alert("That's good - you will learn many things.")
    let secondQuestion = prompt("Do you like the movie adaptations of the books? Answer yes or no.")
    if (secondQuestion == "yes") {
      alert("Cool! Watching movies after reading the books is fun.")
    } else {
      alert("That is understandable.")
    }
  } else {
    alert("Perhaps you like movies instead.")
    let thirdQuestion = prompt("Do you watch series too? Answer yes or no.")
    if (thirdQuestion == "yes") {
      alert("Great! I love watching series too!")
    } else {
      alert("That's too bad.")
    }

    alert("Goodbye")
  }
  //this function is a conversation between the computer and user
  //it asks them if they like reading and answers accordingly
  //one response is about movies and responds then to the user again
}

function age() {
  // write your code here
  let name = prompt("What is your name?")
  let age = Number(prompt("Okay, " + name + " What is your age?"))
  //asks name and age of user

  if (age > 65) {
    alert("You are old enough to retire!")
  }
  //if they are older than 65 they can retire
  if (age < 5) {
    alert("You need supervision when using a computer!")
    //if they are younger than 5 they need supervision while using a computer
  }
  if (age >= 18) {
    alert("You are old enough to vote!")
  }
  //if they are older or is 18 they can vote
  if (age != 16) {
    alert("You are not the same age as me!")
  }
  //if they are not 16 they are not the same age as me
  if (age > 130) {
    alert("Your age is invalid.")
  }
  //if they input an age over 130 it is invalid
  if (age < 1) {
    alert("Your age is invalid.")
  }
  //if they input an age less than 1 it is invalid
}
