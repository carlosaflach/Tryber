const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(typeof myRemove, 'function');  // Verifica o tipo, se é função.
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // O deepEqual faz a verificação para objetos e arrays, se fosse Equal, daria erro. Exercicio 2.
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); // Exercício 3.
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); // Exercício 4.
