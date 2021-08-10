# JavaScript Assíncrono e Callbacks

A `assincronicidade` é um conceito presente no javascript que visa corrigir um problema muito comum, que é:
> O que aconteceria com o seu site, se o conteúdo que é utilizado nele, de outros lugares, que não os seus próprios servidores, saissem do ar ou estivessem lentos?

Dessa forma, com o conceito de assincronicidade, em vez de o programa ser carregado todo em sequência, uma linha após outra, linhas que podem trazer esse tipo de problema citado ali em cima, podem ficar "carregando" enquanto o resto de seu programa executa normalmente.

> A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução `Assíncrona`, e isso tem muito poder.

Esse conceito se torna importante para o caso de uma aplicação conter muitos passos, sendo que alguns passos são independentes de outros, dessa forma, em vez de os passos serem carregados em sequência, eles são carregados independentemente do outro, de forma assíncrona.

Pense no seguinte:

>Um exemplo clássico: são 20h de uma segunda-feira, você está em casa com fome e decide pedir uma pizza. 🍕 Você fica esperando, sem fazer nada, enquanto a pizza não chega? Você pode fazer o que quiser nesse meio tempo, como escutar música ou ver vídeos no YouTube , por exemplo. E assim que a pizza chegar, você dedica seu tempo para poder jantar.Nesse exemplo da pizza, o ato de pedir a pizza corresponde a uma operação assíncrona, e os atos de escutar música e ver vídeos no YouTube são exemplos de operações que independem de pedir a pizza.

---

# Operações Assíncronas

Operações em JavaScript são tradicionalmente síncronas, ou seja, para que uma cadeia de operações seja realizada, é necessário que uma outra operação termine para que a outra comece.

Observe o exemplo abaixo, como uma analogia de processo de produção de um carro com o javascript:
```javascript
console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');
```
No exemplo acima, são operações síncronas, porque uma operação depende do término da anterior para acontecer.

Agora imagine que o nosso estoque de parafusos está chegando ao fim e é necessário que façamos uma reposição para que a linha de produção não pare. No entanto, nossa operação não cobre este tipo situação e nossa linha de produção para enquanto uma pessoa funcionária irá comprar os parafusos e repor o estoque.
```javascript
console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro');
```

Observe que estamos trabalhando de forma ineficiente e adicionando etapas desnecessárias à nossa produção pois se tivermos parafusos suficientes em estoque, não precisamos parar a montagem para que mais parafusos sejam comprados e repostos. 

> Assim como na nossa linha de produção, existem operações que não possuem esta codependência em JavaScript, e com objetivo de cobrir justamente este tipo de situação surgem as operações assíncronas.

Rode o exemplo abaixo em seu editor de texto e veja que nossa linha de produção não depende mais das etapas de compra de parafusos e reposição de estoque

#### Exemplo 1:
```javascript
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
```
Note que `console.log('Comprar parafusos')` e `console.log('Adicionar ao estoque')` foram declarados antes das etapas 1 , 2 e 3 , mesmo assim o retorno das chamadas só ocorre ao final. Isto acontece pois utilizamos a função `setTimeout` . É muito comum que esta função seja utilizada para simular comportamentos assíncronos.

---
## Prática

Obveserve esses exemplos

#### Exemplo 2:
```javascript
const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);
```

#### Exemplo 3:
```javascript
const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha
```

Porque o exemplo 2 passa, e o exemplo 3 falha?

O teste espera receber o array [1, 2, 3], mas recebe apenas o [2, 3], porque foi utilizado a função `setTimeout`. Ela é uma função assíncrona.

Nesse caso para o teste passar seria necessário testar a função após o tempo do `setTimeout`.

#### Exemplo 4:
```javascript
const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);
```

Observe que a saída é a o array [2, 3, 1], isso ocorre pois como a função é assíncrona, o código continua rodando, mesmo que ela não tenha terminado de executar.

>Ou seja, o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1 .

O `setTimeout` é uma ferramenta apenas didática.

---

# Callbacks

A callback como ja vista é uma função que é passada como parâmetro para outra função

A função `setTimeout` utilizada acima foi passada uma callback do tipo arrow function para ela, e o tempo de retorno.

Observe com calma o exemplo abaixo:

#### Exemplo 5:
```javascript
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

// Implementando a função para tratar as informações

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

// Implementação da callback

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);
```
Por fim podemos observar a implementação da nossa função callback representada pela função handleExpenses . Esta função está tratando as informações contidas no array de objetos myExpenses e retornando o valor total de gastos.
Em síntese o que fizemos foi:

  1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.

  2 - Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback .

3 - Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.

4 - Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.
