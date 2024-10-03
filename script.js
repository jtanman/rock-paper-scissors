console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons");
const resultsDiv = document.querySelector(".results");
const resultText = document.createElement("p");
const overallResults = document.createElement("p");
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#comp-score");
const playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again?";

buttons.addEventListener("click", handleButtonClick);
playAgainButton.addEventListener("click", resetGame);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function handleButtonClick(e) {
  if (e.target.tagName === "BUTTON") {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateResults(result);
    checkGameOver();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (computerChoice === winConditions[humanChoice]) {
    humanScore++;
    return `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}.`;
  }
}

function updateResults(result) {
  resultText.textContent = result;
  resultsDiv.insertBefore(resultText, resultsDiv.firstChild);
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function checkGameOver() {
  if (humanScore === 5 || computerScore === 5) {
    overallResults.textContent =
      humanScore === 5 ? "You win the game!" : "You lose the game!";
    resultsDiv.appendChild(overallResults);
    buttons.style.pointerEvents = "none";
    resultsDiv.appendChild(playAgainButton);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  buttons.style.pointerEvents = "auto";
  resultsDiv.removeChild(overallResults);
  resultsDiv.removeChild(playAgainButton);
  resultsDiv.removeChild(resultText);
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}
