const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
  const output = [];
  for (let index = 0; index < array.length; index += 1) {
    output.push(array[index] + 1);
  }
  return output;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);


assert.strictEqual(typeof addOne, 'function'); // verifica se addOne é uma função.
assert.deepStrictEqual(output, expected); // verifica se o array output é igual ao array expected.
assert.deepStrictEqual(myArray, unchanged); // verifica se o array myArray é igual ao array unchanged.