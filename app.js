var diceOne = document.getElementById("dice1")
var diceTwo= document.getElementById("dice2")
var sumArray=[ ]
console.log(sumArray)

function rollTheDice(){
  // Create dice number
  var max=6
  var min=1
  var randomNumber = Math.floor(Math.random()*(max-min+1)+min)
  var randomNumberTwo = Math.floor(Math.random()*(max-min+1)+min)
  diceOne.innerHTML=randomNumber;
  diceTwo.innerHTML=randomNumberTwo;
  //console.log(randomNumber);
  //console.log(randomNumberTwo);
  // Sum both dices
  var sum = randomNumber + randomNumberTwo;
  sumArray.push(sum);
  document.getElementById("answer").innerHTML = sum;
}
  

  