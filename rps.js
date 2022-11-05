let computerPick;
let playerPick;

let wins = 0;
const ROUNDWINS = document.querySelector('.rounds-won');

let ties = 0;
const ROUNDTIES = document.querySelector('.rounds-tied');

let losses = 0;
const ROUNDLOSSES = document.querySelector('.rounds-lost');

let played = 0;
const ROUNDPLAYED = document.querySelector('.rounds-played');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset')
const buttons = document.querySelectorAll('button:not(#reset)');
const result = document.createElement('div')
const choices = document.createElement('div')
const resultsContainer = document.querySelector('.results-container')

result.classList.add("results")
choices.classList.add("results")

function resetValues() {
  const array = [ROUNDLOSSES, ROUNDPLAYED, ROUNDTIES, ROUNDWINS];
  array.forEach(index => index.textContent = "");
  result.remove();
  choices.remove();
  return wins = 0, ties = 0, losses = 0, played = 0;
};


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

const addClickListener = function(callback) {
    buttons.forEach((button) => {button.addEventListener('click', callback)});
}

const playRPS = function(e) {
  let user = e.target.id;
  playerPick = user;
  playRound();
}

addClickListener(playRPS);
reset.addEventListener('click', resetValues);