# Array.find

A função `find` é usada para encontrar o primeiro elemento que satisfaça uma condição passada. Ela irá retornar sempre o **PRIMEIRO** elemento que seja verdadeiro para a condição passada.

>A função que deverá ser passada para a callback, precisa retornar **True** ou **False**.

Ou seja, esse elemento é verdadeiro para a condição passada, se sim, ela para nesse momento, se não ela vai procurar pelo o próximo elemento que satisfaça a condição.

Vamos a um exemplo:

#### Exemplo 1:
```javascript
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
```
