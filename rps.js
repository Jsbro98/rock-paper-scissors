  // create the classic game of rock, paper, and scissors.

/* first, we will write a function that asks the user to input a choice of either rock, paper, or scissors. 
then store that input into a varaible called playerChoice and return it */
let playerPick;
let computerPick;

function playerChoice() {
  playerPick = prompt("pick rock, paper, or scissors");
  console.log(playerPick);
  return playerPick;
}  

playerChoice()
// I will write a function for the random number generator needed in the computer choice

/* then we will write a function that asks the computer to make a choice 
we will run a random number generator between 1 and 3. depending on what number is generated, 
we will store the result in a variable and return it 

if the result is 1, then it will be stored  in a variable called computerChoice with the value "rock" and return it
if the result is 2, then it will be stored in a varaible called computerChoice wtith the value "paper" and return it
if the result is 3, then it will be stored in a variable called computerChoice with the value "scissors" and return it */

/* finally, we will write a function called playRound that puts the previous two functions against each other and display the results
this will be done by testing each value of playerChoice and computerChoice, if the player wins the exchange(true) (rock beats scissors etc.), 
we will display that the player won that round. if the player has lost the exchange (false), 
then we will display that they lost that round. */