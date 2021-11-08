const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (array, word) => {
  let output = -1;
    for (let index = 0; index < array.length; index += 1) {
      if (word === array[index]){
        output = index;
      }
    }
  return output;
};


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);
console.log(findTheNeedle(words, 'needle'));

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);
console.log(findTheNeedle(words, 'plant'));

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
console.log(findTheNeedle(words, 'plat'));
