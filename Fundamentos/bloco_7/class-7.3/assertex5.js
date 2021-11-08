function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

const assert = require('assert');

// declaração da função division, definida anteriormente...

//assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣