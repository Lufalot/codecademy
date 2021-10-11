const para = document.createElement('p');
para.appendChild(document.createTextNode('Esse é um novo parágrafo'));
document.getElementById('div1').appendChild(para);
document.getElementById('div1').appendChild(document.createElement('hr'));


https://github.com/Lufalot/DEVinHouse/blob/main/semana02/exercicio.html
https://github.com/Lufalot/DEVinHouse/blob/main/semana02/scripts/exercicio.js


const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else { console.log ('Use rock, paper or scissors only.'); }
};

function getComputerChoice() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'User super trunfo.';
    }
  if (userChoice === computerChoice) {
    return 'Tie.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won.';
      } else { return 'User won.'; }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won.';
    } else { return 'User won.'; }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won.';
    } else { return 'User won.'; }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`User:${userChoice} x Computer:${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();