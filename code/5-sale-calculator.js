// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let money = Number(prompt("How much money do you have?"))
  let item = Number(prompt("How much is the item normally?"))
  let percent = Number(prompt("What is the discount percentage?"))
  //asks user for information on the item and money

  let discount = percent / 100
  let minus = item * discount
  let cost = item - minus
  //this calculates the cost of the iten with the sale

  if (cost > money) {
    alert("You do not have enough money. You have " + money + " to spend, but even with " + percent + "% off, $" + item + " only comes down to $" + cost + ".")
    //tells user they don't have enough money to buy the item
  } else {
    alert("You can buy that item!")
    //tells the user they can buy the item
  }
}
