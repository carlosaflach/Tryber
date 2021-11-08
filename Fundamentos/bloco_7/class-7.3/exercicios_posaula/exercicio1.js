const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4,5),9, "4+5 é igual a 9"); // este se o retorno de sum(4, 5) é 9.

assert.strictEqual(sum(0,0), 0, "0 + 0 = 0"); // Teste se o retorno de sum(0, 0) é 0.

assert.strictEqual(sum(4,'5'), 9, " A soma de 4 + 5 = 9"); // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5).

