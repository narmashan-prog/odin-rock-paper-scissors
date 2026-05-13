const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 10);
  console.log(choice);
  if (choice <= 3) return "rock";
  else if (choice <= 6) return "paper";
  else return "scissors";
}

/* Code without using DOM
 
function getHumanChoice() {
  let yourChoice = prompt("Enter rock,paper or scissors");
  return yourChoice;
}
do {
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
} while (humanScore < 5 && computerScore < 5); */

rockBtn.addEventListener("click", () => {
  playRound("rock");
});
paperBtn.addEventListener("click", () => {
  playRound("paper");
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    result.textContent = `It's a draw you both choose ${computerChoice}`;
    console.log(`It's a draw you both choose ${computerChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    result.textContent = `You won!  ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.
      Score: You - ${humanScore} Computer - ${computerScore} `;
  } else {
    computerScore += 1;
    result.textContent = `You lost! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}
      Score: You - ${humanScore} Computer - ${computerScore}`;
  }
  if (humanScore == 5) {
    result.textContent = `🏆 You won the game! Your score is ${humanScore} and Computer score is ${computerScore}`;
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
  } else if (computerScore == 5) {
    result.textContent = `💥 Computer won the game! Your score is ${humanScore} and Computer score is ${computerScore}`;
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
  }
}
