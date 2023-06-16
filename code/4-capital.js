// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt('What is your name?')

  let capital = prompt ('Quick question, ' + name + '. What is the capital of France? Capitals matter.')

  if (capital == 'Paris') {
    alert('You are correct, ' + name + '.')
  } else {
    alert('You are wrong, ' + name + '.')
  }
}
