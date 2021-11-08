# Array.filter()

A função `Array.filter` é uma função de objetos do tipo Array. O funcionamento dela é bem parecida com o array.find(). Ela é bem útil para filtrar um array elementos que você não quer.

> O que ela traz de novo, é que ela **_retorna um novo array_** com todos os elementos que satisfaçam uma condição, o retorno dela é do tipo True ou False. Ou seja, se satisfaz a condição ele traz aquele elemento para um novo array.

#### Exemplo 1 - Utilizando o exemplo de find, mas trocando por filter.

```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]
```

Observe que o retorno foram dois números pares do array `numbers`.

Observe esse outro exemplo.

#### Exemplo 2 - Filtrar as pessoas que não possuem idade para dirigir.

```javascript
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
```
---
> Uma outra forma de usar o `filter()` é retornar um array sem o elemento desejado.

No exemplo abaixo, queremos remover Ricardo do objeto, já que ele não é mais estudante.

#### Exemplo 3:
```javascript
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
```
Observer que nesse caso foi utilizado o array.filter(), dentro de uma função que recebe dois parâmetros. O array de valores, e uma string; e a condição do `filter()` é para retornar todos os elementos que tiver o nome diferente do nome especificado.

