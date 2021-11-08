# Array.forEach

A função forEach do Javascript é uma função de objetos do tipo Array, ela serve para que você execute um bloco de código para cada um desses elementos do Array.

>Serve para: Executar um bloco de código para cada um dos elementos do Array.
<br>
<br>

### O forEach **não retorna nenhum valor**.

Entendido para que serve o `forEach`, vamos a um exemplo:

#### Exemplo 1 - Realizar a tabuada do 2:
```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
```

Observe que nesse exemplo ele faz pela callback multipliesFor2, mas poderia ter sido feito diretamente como a Arrow Function.

#### Exemplo 1 - Realizar a tabuada do 2, com Arrow Function:
```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const mutipliesfor2 = numbers.forEach((element) => {
  console.log (`${element} * 2: ${element * 2}`);
})
```
Poderíamos ainda utilizar mais que um parâmentro para função.
#### Exemplo 2:
```javascript
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
```


