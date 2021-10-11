let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

let target = generateTarget();

function compareGuesses(user, computer, target) {
  if (user === target || (user + 1) === target) {
    return true;
  } else if (computer === target) {
    return false;
  }
  user -= target;
  computer -= target;
  console.log(user, computer);
  return (user >= computer) ? true : false;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber++;
}