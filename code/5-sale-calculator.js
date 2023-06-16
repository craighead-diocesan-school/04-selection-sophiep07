// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let money = Number(prompt('How much money do you have?'))
  let item = Number(prompt('How much is the item normally?'))
  let percent = Number(prompt('What is the discount percentage?'))

  let discount = percent / 100
  let minus = item * discount
  let cost = item - minus

  if (cost > money) {
    alert('You do not have enough money. You have ' + money + ' to spend, but even with ' + percent + '% off, $' + item + ' only comes down to $' + cost + '.')
  } else {
    alert('You can buy that item!')
  }
}
