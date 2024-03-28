const PLAYER_LOOSE_MESSAGE = "You lose, try again...";
const PLAYER_WIN_MESSAGE = "Congratulations, you win!";
const PLAYER_TIE_MESSAGE = "That's a tie.";
const ERROR_MESSAGE = "Oops, something went wrong...";

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
    default:
      return "scissors";
  }
}

//return -1 if loose, 0 tie or 1 win
function playRound(playerChoice, computerChoice) {
  //To avoid weird case
  let playerChoiceFormatted = playerChoice.toLowerCase();
  let computerChoiceFormatted = computerChoice.toLowerCase();

  if (
    !isChoiceValid(playerChoiceFormatted) ||
    !isChoiceValid(computerChoiceFormatted)
  ) {
    console.log(ERROR_MESSAGE);
    return 0;
  }

  if (playerChoiceFormatted == computerChoiceFormatted) {
    return 0;
  }

  switch (playerChoiceFormatted) {
    case "rock":
      if (computerChoiceFormatted == "paper") {
        return -1;
      } else if (computerChoiceFormatted == "scissors") {
        return 1;
      }
      break;
    case "paper":
      if (computerChoiceFormatted == "scissors") {
        return -1;
      } else if (computerChoiceFormatted == "rock") {
        return 1;
      }
      break;
    case "scissors":
      if (computerChoiceFormatted == "rock") {
        return -1;
      } else if (computerChoiceFormatted == "paper") {
        return 1;
      }
      break;
    default:
      console.log(ERROR_MESSAGE);
      return 0;
  }

  //Should not get here
  console.log(ERROR_MESSAGE);
  return 0;
}

function isChoiceValid(choice) {
  return (
    choice.toLowerCase() == "paper" ||
    choice.toLowerCase() == "rock" ||
    choice.toLowerCase() == "scissors"
  );
}

function playGame() {
  let playerScore = 0;
  let playerChoice;

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Let's play :");
    if (!isChoiceValid(playerChoice)) {
      console.log("Incorrect choice, try again.");
      i = i - 1;
      continue;
    }

    let result = playRound(playerChoice, getComputerChoice());
    playerScore = playerScore + result;
    if (result == -1) {
      console.log(PLAYER_LOOSE_MESSAGE);
    } else if (result == 0) {
      console.log(PLAYER_TIE_MESSAGE);
    } else if (result == 1) {
      console.log(PLAYER_WIN_MESSAGE);
    }
  }

  if (playerScore >= 0) {
    console.log("You won the game!");
  } else {
    console.log("You lost the game!");
  }
}

playGame();
