console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Please choose rock, paper, or scissors.").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice.");
  }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
        computerScore++;
      return "You lose! Paper beats rock.";
    } else {
        humanScore++;
      return "You win! Rock beats scissors.";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
        computerScore++;
      return "You lose! Scissors beats paper.";
    } else {
        humanScore++;
      return "You win! Paper beats rock.";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
        computerScore++;
      return "You lose! Rock beats scissors.";
    } else {
        humanScore++;
      return "You win! Scissors beats paper.";
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
