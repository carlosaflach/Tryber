# Array.reduce

O array.reduce talvez seja uma das HOFs mais poderosas que existem, diferentemente de outras HOFs, ela possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é o `acumulador`, comumente referido como `acc`.

> O acumulador ou acc, serve para acumular dentro de si os resultados das funções. 

Pense da seguinte forma, para um array de 5 elementos, caso não exista um segundo parâmetro no reduce(), que seria o valor inicial setado para o acumulador, o reduce executará a função passada como parâmetro 4 vezes. 

O valor inicial do `acc` será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array, que está no acc, com a segunda posição que está no seu parâmetro `curr`, que é chamado de current. Na segunda iteração, acc conterá o retorno da primeira iteração, e assim por diante.

Observer o exemplo abaixo, onde queremos executar a soma de todos elementos de um array.

#### Exemplo 1 - Utilizando o for:

```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113
```

#### Exemplo 2 - Utilizando o Reduce:
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
```

Dissecando a função:

## Usando .reduce :
* A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number ;
* Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number ;
* O retorno é salvo no primeiro parâmetro , result . É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index] , mas nesse caso seria result = result + number

O reduce possui uma outra diferença: você pode passar **um segundo parâmetro para o reduce, logo após a função**:

Veja o exemplo abaixo

#### Exemplo 3 - Sem o segundo parâmetro:
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
```

#### Exemplo 4 - Com o segundo parâmetro:
```javascript
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "10"
console.log(sumNumbers); // 123
```
Ou seja, ao adicionar o segundo parâmetro, estamos adicionando um valor inicial na variavel `acc`. Caso esse parâmetro não seja passado, o valor inicial do acc, será a primeira posição do array.

#### Exemplo 5 - Buscar o maior valor de um array:
```javascript
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
```

Observe que se modificarmos o valor do segundo parâmetro para 100, esse seria o valor apresentado, uma vez que não existiria numero maior que 100.

#### Exemplo 6 - Somar todos os números pares de um array:
```javascript
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152
```
Aqui utilizamos os filter para filtrar os números pares, e em seguida o reduce para realizar a soma.

#### Exemplo 7 - Usando apenas o reduce:
```javascript
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152
```

#### Exemplo 8 - Criar uma função para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.
```javascript
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

/// Solução
const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));
```