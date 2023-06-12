// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt('How old are you?')

  if (age >= 16) {
    alert("You're old enough to drive.")
  }
  
  if (age < 16)
    alert("You're not old enough to drive.")
}
