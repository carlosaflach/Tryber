const readline = require('readline-sync');

const weight = readline.questionFloat('Qual é o seu peso? ');
const heigth = readline.questionFloat('Qual é sua altura? ');
const imc = (weight/(heigth * heigth)).toFixed(2);

console.log(imc);

