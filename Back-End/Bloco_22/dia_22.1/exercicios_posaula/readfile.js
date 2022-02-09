const readline = require('readline-sync');

const readName = () => readline.question('How is your name?\n');
const readAge = () => readline.questionInt('How old are you?\n');
const readHeight = () => readline.questionFloat("What is your height?\n");
const readWeight = () => readline.questionFloat("What is your weight?\n");

module.exports = { readName, readAge, readHeight, readWeight }