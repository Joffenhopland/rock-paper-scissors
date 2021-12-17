let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    capitalizeFirstLetter(userChoice) +
    " beats " +
    computerChoice +
    ". You win! 🔥";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    capitalizeFirstLetter(userChoice) +
    " loses to " +
    computerChoice +
    ". You lose! 😭";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML =
    capitalizeFirstLetter(userChoice) +
    " equals " +
    computerChoice +
    ". It's a draw! 😶";
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + " " + computerChoice) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      win(userChoice, computerChoice);
      break;
    case "rock paper":
    case "paper scissors":
    case "scissors rock":
      lose(userChoice, computerChoice);
      break;
    case "rock rock":
    case "paper paper":
    case "scissors scissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

main();
