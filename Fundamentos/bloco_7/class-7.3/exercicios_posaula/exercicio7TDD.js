const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const results = greaterThanTen(parameter);
console.log(results);

assert.strictEqual(typeof(greaterThanTen), 'function');
assert.deepStrictEqual(results, result);
