  // create the classic game of rock, paper, and scissors.

/* first, we will write a function that asks the user to input a choice of either rock, paper, or scissors. 
then store that input into a varaible called playerPick and return it */
let playerPick;
let computerPick;

function playerChoice() {
  playerPick = prompt("pick rock, paper, or scissors");
  playerPick = playerPick.trim().toLowerCase()
  if(playerPick != "rock" && playerPick != "paper" && playerPick != "scissors") {
    console.warn("rock, paper, or scissors was not chosen, an error will occur.")
  }
    return playerPick;
}

// I will write a function for the random number generator needed in the computer choice

function randomNumber() {
  return Math.floor(((Math.random()) * 3) + 1);
} 

/* then we will write a function that asks the computer to make a choice 
we will run a random number generator between 1 and 3. depending on what number is generated, 
we will store the result in a variable and return it 

if the result is 1, then it will be stored  in a variable called computerPick with the value "rock" and return it
if the result is 2, then it will be stored in a varaible called computerPick wtith the value "paper" and return it
if the result is 3, then it will be stored in a variable called computerPick with the value "scissors" and return it */

function computerChoice() {
  let number = randomNumber()
  if(number == 1) {
    computerPick = "rock";
    return computerPick;
  } else if (number == 2) {
    computerPick = "paper";
    return computerPick;
  } else {
    computerPick = "scissors";
    return computerPick;
  }
}

/* finally, we will write a function called playRound that puts the previous two functions against each other and display the results
this will be done by testing each value of playerChoice and computerChoice, if the player wins the exchange(true) (rock beats scissors etc.), 
we will display that the player won that round. if the player has lost the exchange (false), 
then we will display that they lost that round. */

function playRound(number) {
for (let i = 0; i < number; i++) {
  
  let player = playerChoice();
  let computer = computerChoice();

  
  let roundTie = () => {
    if (player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors") {
      return true;
    }
  }
  
  let roundWin = () => {
    if (player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper" || player == "paper" && computer == "rock") {
      return true;
    }
  }
  
  let roundLose = () => {
    if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock") {
      return true;
    }
  }
  
  let tie = roundTie();
  let win = roundWin();
  let lose = roundLose();

  console.log(`player chose: ${player} & computer chose: ${computer}`)
  

  if(win) {
      console.log("You Win!")
  } else if (lose) {
      console.log("You Lose!")
  } else if (tie) {
      console.log("It's A Tie!")
  } else {
      console.error("Something went wrong. Be sure to put rock, paper, or scissors in the input!")
  }
}
}