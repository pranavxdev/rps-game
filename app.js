var playerScore = 0;
var computerScore = 0;
var winner;
let announceText = document.getElementById("winner");

let scoreMessage = document.getElementById("scoreMessage");
let scoreInfo = document.getElementById("scoreInfo");

const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");

const playerSelectionBtn = document.querySelectorAll(".weapon-btn");
const playerScoreDisp = document.getElementById("playerScore");
const computerScoreDisp = document.getElementById("computerScore");

//algorithm for computer selection
function computerPlay() {
  let computerArray = ["rock", "paper", "scissors"];

  let computerChoice =
    computerArray[Math.floor(Math.random() * computerArray.length)];
  return computerChoice;
}

// function for game round
function playRound() {
  let map = { rock: "scissors", paper: "rock", scissors: "paper" };
  let computerSelection = computerPlay();

  playerSign.innerHTML = `<img class="disp-icon" src="/weapons/${playerSelection}.svg" ></img>`;
  computerSign.innerHTML = `<img class="disp-icon" src="/weapons/${computerSelection}.svg" ></img>`;

  if (playerSelection === computerSelection) {
    scoreInfo.innerHTML = `Draw!`;
    scoreMessage.innerHTML = `${playerSelection} ties with ${computerSelection}.`;
  } else if (computerSelection === map[playerSelection]) {
    playerScore++;
    scoreInfo.innerHTML = "You Win!";
    scoreMessage.innerHTML = `${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    scoreInfo.innerHTML = "You Lose!";
    scoreMessage.innerHTML = `${computerSelection} beats ${playerSelection}.`;
  }
}

const announceWin = function () {
  let modalBG = document.getElementById("modal");
  let modal = document.getElementById("modalContainer");
  let playAgain = document.getElementById("restart");

  modalBG.style.display = "initial";
  modal.style.display = "initial";
};

playerSelectionBtn.forEach((element) => {
  element.addEventListener("click", function () {
    playRound();

    playerScoreDisp.innerHTML = playerScore;
    computerScoreDisp.innerHTML = computerScore;

    if (playerScore === 5) {
      announceText.innerHTML = "You Won!";
      announceWin();
    } else if (computerScore === 5) {
      announceText.innerHTML = "You Lost!";
      announceWin();
    }
  });
});
