const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(array[i].length);
  }
  return output;
};
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
// console.log(wordLengths(words));

assert.strictEqual(typeof wordLengths, 'function'); // Verifica se é uma função.
const output = wordLengths(words); // faz a chamada da função com o parametro words.
assert.deepStrictEqual(output, expected); // Verifica se a saida da função é igual ao array esperado.