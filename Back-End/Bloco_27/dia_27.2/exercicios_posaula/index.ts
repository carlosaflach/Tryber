// Para testar!
// ./index.ts

import Person from './Person'

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));