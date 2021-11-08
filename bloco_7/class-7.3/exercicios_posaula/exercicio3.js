const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.strictEqual(typeof(myRemoveWithoutCopy), 'function'); // Verifica se  é função

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]); // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado.

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]); // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

const myList = [1, 2, 3, 4];
myRemoveWithoutCopy(myList, 1);  // Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações.
assert.strictEqual(myList.length, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]); // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.


