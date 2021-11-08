# Higher Order Functions

As Higher Order Functions são fuções implementadas no ES6 que permitem a utilização de lógicas muito utilizadas na vida de um programador, o que gera economia de código e poupa trabalho da pessoa em reestruturar toda a lógica novamente. 

> Ou seja, com as HOFs, você só precisa se preocupar com a solução do problema que deve ser solucionado, e não em implementar a lógica de programação utilizando loops complexos.

## First-Class Functions

Uma linguaguem é dita ter First-Class Functions quando trata suas funções como first class citizens (isto é, cidadãos de primeira classe), ou seja, elas suportam as mesmas operações que estão disponíveis para os outros tipos. Isso significa que nossas funções podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções. JavaScript é uma linguagem que utiliza esse conceito, portanto podemos:

#### **Atribuir Funções a variáveis:**

```javascript 
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]
```
Nesse caso armazenamos a função em uma variável chamada sumVariable. Este foi somente um exemplo que podemos atribuir uma função a uma variável. 

#### **Exemplo 2 - arrow function:**
```javascript
const sum = (number1, number2) => {
  return number1 + number2;
};
```

Quanto utilizamos a sintaxe da arrow function, estamos justamente utilizando a capacidade do javascript de conseguir armazenar a função dentro de uma variável. 

#### **Passar função como parâmetro de outra função**
```javascript
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);
```

#### **Retornar uma função de outra função**
```javascript
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));
```

## Higher Order Functions

Agora que conhecemos um pouco mais sobre funções de primeira classe, vamos entender o que são as funções de classe superior, as chamdas HOFs.

> As HOFs são funções que usam outras funções em suas operações, devendo aceitá-lças como parâmetro e/ou retorná-las.

#### Exemplo:
```javascript
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
```

Como podemos ver no exemplo a cima, passamos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, `addEventListener` é uma HOF.

> **Lembre-se:** First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript) trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro), e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.

## Estruturando uma Higher Order Function:

Vejamos o exemplo abaixo:

#### Exemplo 1:
```javascript
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);
```
No exemplo as cima, construímos uma função para receber um número, e implementar um laço de repetição para esse número, e é chamada outra função como parâmentro action, nesse caso o `console.log`, do proprio contador.

Aumentando um pouco a complexidade da função, poderiamos:
#### Exemplo 2:
```javascript
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});
```
Nesse caso, pegamos nossa implementação anterior, e na hora da chamada da função repeat, passamos uma arrow function como segundo parâmetro. Dessa forma, quando for executado o action dentro da função repeat ele estára acessando a arrow function que checa se o número é par para o loop de repetição.  Deste modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.

Implementando a solução anterior para verificar se os números são ímpares também, veja como fica fácil a implementação da função:

#### Exemplo 3:
```javascript
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;
```
Nesse caso apenas foi transportado e ajustado a lógica para identificar os números, em duas novas funções `isEven` e `isOdd`. Apos isso alteramos o segundo parâmetro ao chamar a função `repeat`.

>A função recebida como argumento pela HOF, também é conhecida por callback . No exemplo, repeat é uma HOF que recebe `isEven` ou `isOdd` como callback.

Observe o exemplo a seguir:

#### Exemplo 4:

```javascript
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);
```

Ao executar esse código não recebemos um número aleatório. Isso acontece porque na linha 149, apenas imprimimos a escrita da função, e não a executamos, dessa forma ela não seguiu os procedimentos para retornar um número aleatório. Para executar essa função teriamos que inserir os `()` na frente do `numberGenerator`. Como no exemplo abaixo.

#### Exemplo 5:
```javascript
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());
```
