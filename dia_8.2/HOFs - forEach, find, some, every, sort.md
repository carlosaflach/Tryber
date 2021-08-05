# Higher Order Functions - forEach, find, some, every, sort

Em suas últimas duas versões, **Javascript** vem adicionando funções que facilitam muito a criação e manipulação de arrays. Essas funções que estudaremos hoje são muito poderosas e ajudam a escrever um código mais legível, expressivo e conciso, menos propenso a conter erros, e comumente mais eficiente.

---
### **Recapitulando:** 
Uma higher order funcion é uma função que recebe outra função como parâmentro ou que retorna uma função.

#### Exemplo 1: 
```javascript
const button = document.getElementById('button');
button.addEventListener('click', () => {
  console.log('Clicou no botão!');
});
```
---
### Importância das HOFs

Além de event listeners, o Javascript possui muitas outras funções desse tipo. Os arrays em particular possuem várias funções que facilitam sua criação e manipulação, além de deixar o seu código mais legível e conciso.

Observe os dois exemplos a seguir, com a implementação de um código, onde o objeto está desatualizado e precisa ser atualizado com a informação da aprovação.

### Utilizando o loop for:
```javascript
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
```
### Utilizando o forEach:
```javascript
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
```
Ok, as duas abordagens geram o mesmo resultado, mas qual a diferença? Vamos analisar as duas soluções e ver em que elas diferem!
Na solução usando `for` , você vai precisar se preocupar mais com os detalhes durante a implementação de sua lógica de execução e menos com a solução do problema que você deseja solucionar - você só quer atualizar uma propriedade de cada estudante, afinal. Você precisa:

* Declarar uma variável para controlar a iteração pelo array;
* Inicializar essa variável com zero, a primeira posição do array;
* Controlar o ponto de parada, quando o fim do array foi alcançado `( index < students.length )`;
* Incrementar manualmente a variável de controle do loop a cada iteração  `( index += 1 )`;
* Usar indexação de arrays pra acessar cada elemento/estudante `( students[index] )`;

Agora vamos olhar para a segunda solução. Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função `forEach`. 
 
Abaixo segue mais um exemplo da utilização e da importancia de utilizar as HOFs para resolução de problemas.

#### Exemplo Utilizando o For loop:
Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça uma determinada condição, nesse caso encontrar o primeiro número divisível por 5.
```javascript
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50
```

#### Exemplo Utilizando a HOF find:
```javascript
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50
```

Muito mais consiso e mais fácil de entender usando o find.

---
## Estrutura das HOFs em Arrays

Sintaxe
```javascript
array.forEach((element)=> {
  // função a ser executada pela função.
});
```

Vamos a um exemplo para ficar mais claro:
#### Exemplo 1 - Estrutura de uma HOF:
```javascript
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }
```
### Suas partes

* `arrayOfValues: Nome do array a ser percorrido.`
* `.forEach: A HOF, que pode ser qualque hof.`
* `element:  Valor do elemento do array`
* `(element) => {console.log('Cada elemento do array:', element); - função a ser executada.`

A própria HOF se encarrega  da lógica de pegar cada elemento do arraye passar como parâmetro para a arrow function.

**Observe abaixo que podemos passar mais de um parâmetro para a HOF:**
```javascript
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
```
A arrow function passada para o forEach possui element , index e array como parâmetros, onde:
* `element` - Valor do elemento do array;
* `index` - Índice em cada iteração ou posição do elemento no array, começando do 0;
* `array` - Array original que está sendo percorrido.