const imc = require('./imc');
const { readName, readAge, readHeight, readWeight } = require('./readfile');

const name = readName();
const age = readAge();
const height = readHeight();
const weight = readWeight();

console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}`);