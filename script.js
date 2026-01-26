let getComputerChoice = function () {
  let num = Math.random() * 100;

  if (num < 33) {
    // console.log("rock");
    return "rock";
  } else if (num > 33 && num < 66) {
    // console.log("paper");
    return "paper";
  } else {
    // console.log("scissor");
    return "scissor";
  }
};

//getting methods
let h1 = document.querySelector(".start");
let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");
let you = document.querySelector("#player");
let oppo = document.querySelector("#oppo");

let humanScore = 0;
let oppoScore = 0;
function myScore() {
  humanScore == humanScore++;
  you.textContent = humanScore;
}
function playRound(humanChoice, computerChoice) {
  choice1.textContent = ("your choice:", humanChoice);
  choice2.textContent = ("computer's choice:", computerChoice);
  while (humanScore != 5 || oppoScore != 5) {
    if (humanScore > 4) {
      h1.textContent = "You Won The Game";
      choice1.textContent = "";
      choice2.textContent = "";
      break;
    }
    if (oppoScore > 4) {
      h1.textContent = "You lose the Game";
      choice1.textContent = "";
      choice2.textContent = "";
      break;
    }
    if (
      humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "paper"
    ) {
      h1.textContent = "You lose this round,Paper beats Rock";
      oppoScore == oppoScore++;

      oppo.textContent = oppoScore;
      return oppoScore;
    } else if (
      humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "scissor"
    ) {
      h1.textContent = "You won this round,Rock beats Scissor ";
      myScore();
      return 1;
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "rock"
    ) {
      h1.textContent = "You won this round,Paper beats Rock";
      myScore();
      return 1;
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "scissor"
    ) {
      h1.textContent = "You lose this round,Scissor beats Paper";
      oppoScore == oppoScore++;
      console.log(oppoScore);
      oppo.textContent = oppoScore;
      return oppoScore;
    } else if (
      humanChoice.toLowerCase() === "scissor" &&
      computerChoice.toLowerCase() === "paper"
    ) {
      h1.textContent = "You won this round,Scissor beats Paper";
      myScore();
      return 1;
    } else if (
      humanChoice.toLowerCase() === "scissor" &&
      computerChoice.toLowerCase() === "rock"
    ) {
      h1.textContent = "You lose this round,Rock beats Scissor";
      oppoScore == oppoScore++;

      oppo.textContent = oppoScore;
      return oppoScore;
    } else {
      h1.textContent = "A Tie";
      return 2;
    }
  }
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});

const restart = document.querySelector(".restart");

function toRestart() {
  h1.textContent = "START GAME";
  humanScore = 0;
  oppoScore = 0;

  you.textContent = "0";
  oppo.textContent = "0";
  choice1.textContent = "Your Choice";
  choice2.textContent = "Opponent Choice";
}
restart.addEventListener("click", toRestart);
