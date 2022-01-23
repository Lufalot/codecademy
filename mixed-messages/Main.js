const fraseStart = require("./phraseStart");
const fraseMiddle = require("./phraseMiddle");
const fraseEnd = require("./phraseEnd");
const readline = require("readline-sync");

let confirmar = true;
do {
  console.log("Mensagem do dia:");
  let randomStart = Math.floor(Math.random() * 13);
  let randomMiddle = Math.floor(Math.random() * 13);
  let randomEnd = Math.floor(Math.random() * 13);
  console.log(
    fraseStart.START[randomStart] +
      fraseMiddle.MIDDLE[randomMiddle] +
      fraseEnd.END[randomEnd]
  );
  console.log("Ver outra? (Digite algo para ver ou Enter para sair.");
  confirmar = Boolean(readline.question());
} while (confirmar);
