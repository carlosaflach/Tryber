const readline = require('readline-sync');



const guessNumber = () => {
  const number = readline.questionInt(`Choose a number between 0 and 10:
`);
  const randomNumber = Math.floor(Math.random() * 10);

  if(number === randomNumber) console.log(`Congratulations, you win!! Your number is ${number}, and the lotery picked ${randomNumber}`);
  else {
    console.log(`Sorry!! Not this time! You pick ${number}, but the lotery picked ${randomNumber}`);
  }
  
  const playAgain = readline.question(`Deseja jogar novamente? Digite s para sim, ou qualquer outra coisa para não.
  `);

  if(playAgain  === 's') {
    guessNumber();
  }
}

guessNumber();