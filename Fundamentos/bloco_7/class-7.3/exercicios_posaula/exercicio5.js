const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.strictEqual(typeof(obj1), 'object');assert.strictEqual(typeof(obj1), 'object');
assert.strictEqual(typeof(obj2), 'object');
assert.strictEqual(typeof(obj3), 'object');

assert.deepStrictEqual(obj1,obj2); // Verifica se os objetos são iguais.
assert.notDeepStrictEqual(obj1,obj3); // Verifica se os objetos são diferentes.
assert.notDeepStrictEqual(obj2,obj3);