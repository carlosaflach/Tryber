const readline = require('readline-sync');
console.log('Hello, World!');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}!, You're ${age} years old!`);
