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

function playRound(playerChoice, computerChoice) {
  //To avoid weird case
  let playerChoiceFormatted = playerChoice.toLowerCase();
  let computerChoiceFormatted = computerChoice.toLowerCase();

  if (
    !isChoiceValid(playerChoiceFormatted) ||
    !isChoiceValid(computerChoiceFormatted)
  ) {
    return ERROR_MESSAGE;
  }

  if (playerChoiceFormatted == computerChoiceFormatted) {
    return PLAYER_TIE_MESSAGE;
  }

  switch (playerChoiceFormatted) {
    case "rock":
      if (computerChoiceFormatted == "paper") {
        return PLAYER_LOOSE_MESSAGE;
      } else if (computerChoiceFormatted == "scissors") {
        return PLAYER_WIN_MESSAGE;
      }
      break;
    case "paper":
      if (computerChoiceFormatted == "scissors") {
        return PLAYER_LOOSE_MESSAGE;
      } else if (computerChoiceFormatted == "rock") {
        return PLAYER_WIN_MESSAGE;
      }
      break;
    case "scissors":
      if (computerChoiceFormatted == "rock") {
        return PLAYER_LOOSE_MESSAGE;
      } else if (computerChoiceFormatted == "paper") {
        return PLAYER_WIN_MESSAGE;
      }
      break;
    default:
      return ERROR_MESSAGE;
  }

  //Should not get here
  return ERROR_MESSAGE;
}

function isChoiceValid(choice) {
  return (
    choice.toLowerCase() == "paper" ||
    choice.toLowerCase() == "rock" ||
    choice.toLowerCase() == "scissors"
  );
}

//Play 10 times rock against the computer
for (i = 0; i < 10; i++) {
  let playerChoice = "rock";
  console.log(playRound(playerChoice, getComputerChoice()));
}
