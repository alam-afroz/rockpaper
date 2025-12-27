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

const getHumanChoice = function () {
  let choice = prompt("Choose between 🪨Rock ,📃Paper and ✂️Scissor");
  if (choice.toLowerCase() === "rock") {
    return "Rock";
  } else if (choice.toLowerCase() === "paper") {
    return "Paper";
  } else if (choice.toLowerCase() === "scissor") {
    return "Scissor";
  }
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
  const playRound = function (humanChoice, computerChoice) {
    console.log("your choice:", humanChoice);
    console.log("computer's choice:", computerChoice);
    if (
      humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "paper"
    ) {
      console.log("You lose this round,Paper beats Rock");
      return 0;
    } else if (
      humanChoice.toLowerCase() === "rock" &&
      computerChoice.toLowerCase() === "scissor"
    ) {
      console.log("You won this round,Rock beats Scissor");
      return 1;
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "rock"
    ) {
      console.log("You won this round,Paper beats Rock");
      return 1;
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice.toLowerCase() === "scissor"
    ) {
      console.log("You lose this round,Scissor beats Paper");
      return 0;
    } else if (
      humanChoice.toLowerCase() === "scissor" &&
      computerChoice.toLowerCase() === "paper"
    ) {
      console.log("You won this round,Scissor beats Paper");
      return 1;
    } else if (
      humanChoice.toLowerCase() === "scissor" &&
      computerChoice.toLowerCase() === "rock"
    ) {
      console.log("You lose this round,Rock beats Scissor");
      return 0;
    } else {
      console.log("A Tie");
      return 2;
    }
  };

  for (let i = 0; i < 5; i++) {
    const rounds = playRound(getHumanChoice(), getComputerChoice());
    if (rounds === 0) {
      computerScore = ++computerScore;
    }
    if (rounds === 1) {
      humanScore = ++humanScore;
    } else {
      humanScore = humanScore;
      computerScore = computerScore;
    }
    console.log("HumanScore=", humanScore);
    console.log("ComputerScore=", computerScore);
    console.log("   <==Round Over==>   ");
  }
};
playGame();
