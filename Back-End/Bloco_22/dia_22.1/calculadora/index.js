const operations = require('./operacoes');
const readline = require('readline-sync');

console.log('Calculadora sendo executada');

const num1 = readline.questionInt('Digite o primeiro número: ');
const oper = readline.question('Digite a operação: (+, -, *, /) ');
const num2 = readline.questionInt('Digite o segundo número: ');

switch (oper) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mul(num1, num2)
    break;
  case "/":
    operations.div(num1, num2)
    break;
  default:
    console.log("Opa! A operação é desconhecida ou não foi implementada.");
}
