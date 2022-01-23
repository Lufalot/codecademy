const frases = require("./mensagens");
const readline = require("readline-sync");

let confirmar = true;
do {
  console.log("Mensagem do dia:");
  let randomNumber = Math.floor(Math.random() * 13);
  console.log(randomNumber + 1);
  console.log(frases.MSG[randomNumber]);
  console.log("Ver outra? (Digite algo para ver ou Enter para sair.");
  confirmar = Boolean(readline.question());
} while (confirmar);
