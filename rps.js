/* This entire section below is for the creation of
 all elements and styling for this project */

const body = document.querySelector('body')

// creation of tally wrapper and all elements within it
const tallyWrapper = document.createElement('div');
tallyWrapper.classList.add("tally-wrapper");

const roundsWon = document.createElement('div');
roundsWon.textContent = "Rounds Won: ";

const roundsLost = document.createElement('div');
roundsLost.textContent = "Rounds Lost: ";

const roundsTied = document.createElement('div');
roundsTied.textContent = "Rounds Tied: ";

const roundsPlayed = document.createElement('div');
roundsPlayed.textContent = "Rounds PLayed: ";

const roundsWonSpan = document.createElement('span');
roundsWonSpan.classList.add("rounds-won");

const roundsLostSpan = document.createElement('span');
roundsLostSpan.classList.add("rounds-lost");

const roundsTiedSpan = document.createElement('span');
roundsTiedSpan.classList.add("rounds-tied");

const roundsPlayedSpan = document.createElement('span');
roundsPlayedSpan.classList.add("rounds-played")

body.appendChild(tallyWrapper);

tallyWrapper.appendChild(roundsWon);
tallyWrapper.appendChild(roundsLost);
tallyWrapper.appendChild(roundsTied);
tallyWrapper.appendChild(roundsPlayed);

roundsWon.append(roundsWonSpan);
roundsLost.append(roundsLostSpan);
roundsTied.append(roundsTiedSpan);
roundsPlayed.append(roundsPlayedSpan);








// two main varibles for the main logic function
let computerPick;
let playerPick;

// tally variables and selectors
let wins = 0;
const ROUNDWINS = document.querySelector('.rounds-won');

let ties = 0;
const ROUNDTIES = document.querySelector('.rounds-tied');

let losses = 0;
const ROUNDLOSSES = document.querySelector('.rounds-lost');

let played = 0;
const ROUNDPLAYED = document.querySelector('.rounds-played');

// all button selectors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

const resultsContainer = document.querySelector('.results-container')

// these create divs to give the user feedback
const result = document.createElement('div')
result.classList.add("results")

const choices = document.createElement('div')
choices.classList.add("results")


function randomNumber() {
  return Math.floor(((Math.random()) * 3) + 1);
} 


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

// main logic function
function playRound(number = 1) {
for (let i = 0; i < number; i++) {
  
  let player = playerPick;
  let computer = computerChoice();

  
  const roundTie = () => {
    if (player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors") {
      ties++;
      ROUNDTIES.innerHTML = ties;
      return true;
    }
  }
  
  const roundWin = () => {
    if (player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper" || player == "paper" && computer == "rock") {
      wins++;
      ROUNDWINS.innerHTML = wins;
      return true;
    }
  }
  
  const roundLose = () => {
    if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock") {
      losses++;
      ROUNDLOSSES.innerHTML = losses;
      return true;
    }
  }
  
  let tie = roundTie();
  let win = roundWin();
  let lose = roundLose();

  choices.innerHTML = `<span class="player-chose">Player chose:</span> ${player} <span class="computer-chose">Computer chose:</span> ${computer}`;
  resultsContainer.appendChild(choices);
  

  if(win) {
      result.textContent = "You Win!";
      result.style.cssText = "background: rgb(179, 255, 179); border: 4px solid green"
  } else if (lose) {
      result.textContent = "You Lose!";
      result.style.cssText = "background: rgb(255, 179, 179); border: 4px solid red"
  } else if (tie) {
      result.textContent = "It's A Tie!";
      result.style.cssText = "background: white; border: 4px solid black"
  } else {
      result.textContent = "ERROR";
  }
  resultsContainer.appendChild(result);
  played++;
  ROUNDPLAYED.innerHTML = played;
}
}

// function to add event listeners to the buttons
const addClickListener = function(callback) {
    buttons.forEach((button) => {button.addEventListener('click', callback)});
}

// function attached to the buttons
const playRPS = function(e) {
  let user = e.target.id;
  playerPick = user;
  playRound();
}

addClickListener(playRPS);