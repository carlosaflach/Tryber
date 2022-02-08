const readline = require('readline-sync');

const readName = readline.question('How is your name?\n');
const readAge = readline.questionInt('How old are you?\n');
const readHeight = readline.questionFloat("What is your height?\n")
const readWeight = readline.questionFloat("What is your weight?\n")

const name = readName;
const age = readAge;
const weight = readWeight;
const height = readHeight;

const imc = (height, weight) => {
  return (weight / Math.pow(height, 2)).toFixed(2);
};

console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}`);