# Default Destructuring

> Quando tentamos acessar uma propriedade de um array ou objeto que não existe usando o **Object Destructuring** ou o **Array Destructuring** irá retornar undefined.

#### Exemplo 1:
```javascript
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;
console.log(nationality) // return -> undefined.
```
> Isso acontece porque a propriedade que estamos tentando acessar não existe, seja para um array ou para um objeto.
> Para resolver esse problema existe a feature **Default Destructuring**, onde é possível declarar novas propriedades e elementos para objetos iteráveis.

#### Exemplo 2: Aplicando o Default Destructuring no exemplo 1.
```javascript
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian
```

#### Exemplo 3: Utilizando um array.
```javascript
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
```
