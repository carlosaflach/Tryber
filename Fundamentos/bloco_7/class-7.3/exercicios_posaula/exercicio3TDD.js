const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (array) => {
  let output = 0;
  for (let i = 0; i < array.length; i += 1) {
    output += array[i];
  }
  return output;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);
 // console.log(sumAllNumbers(numbers)); // Valida a saida imprimindo o valor.
assert.strictEqual(typeof sumAllNumbers, 'function'); // verifica se é uma função.
assert.strictEqual(output, expected); // verifica se a saida é igual ao esperado.
