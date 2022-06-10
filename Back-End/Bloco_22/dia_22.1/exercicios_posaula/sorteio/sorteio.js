const readline = require('readline-sync');


const logResultado = (numero, resposta) => {
  if(Number(numero) !== resposta) return console.log(`Opa, não foi dessa vez. O número sorteado foi: ${resposta}`);
  return console.log('Parabéns, número correto!');
}

const sorteio = () => {
  const randomNumber = Math.floor((Math.random() * 10) + 1);
  
  const numero = readline.questionInt('Escolha um número de 1 a 10: ');
  logResultado(numero, randomNumber);

  const playAgain = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ')

  if(playAgain !== 's') return console.log('OK, até a próxima!');

  sorteio();
}

sorteio();