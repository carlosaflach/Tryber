const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y; // para classificar o array do menor para o maior.
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const results = secondThirdSmallest(parameter);
console.log(results);
assert.strictEqual(typeof(secondThirdSmallest), 'function');

assert.deepStrictEqual(results, result);