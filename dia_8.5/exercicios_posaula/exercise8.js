const assert = require('assert');

// escreva greet abaixo
const greet = (nome, msg = 'Hi') => `${msg} ${nome}`;
console.log(greet('Jhon'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela','Oi'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');