# Spread Operator

> O Spread Operator serve para espalhar valores de um objeto iteravel, como array ou objetos. Isso é muito útil quando desejamos criar uma combinação de arrays, ou objetos, ou quando precisamos informar esses valores que estão dentro do array  ou objeto, como uma lista de valores.

### Exemplos de resoluções.
#### Usando o comando for:
``` javascript
const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]
```
>Note aqui que uma vez que usamos a função push para o array numbers, o array numbers deixa de ser o array original, e passa a ser um novo array numbers com mais elementos.

#### Usando o spread operator:
```javascript
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
```
> Dessa forma, criamos uma concatenação de arrays, sem modificar o array original.

## Exemplo para combinação de arrays:
```javascript
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */
```
## Outra Utilização do Spread Operator:
> O spread operator pode ser usado também no argumento de uma função, observe o exemplo abaixo:
### Exemplo:
```javascript
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
// Nesse caso o spread operator fui usado para espalhar o array que continha dois elementos, como dois parâmetros para a função.
```
> É possível ainda aplicar o spread operator para funções prontas do Javascript, que recebem multiplos parâmetros.
> Por exemplo as funções <Math.max> e <Math.min>
### Exemplo:
```javascript
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
```
### Exemplo aplicado a objetos:
```javascript
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */
```
