# Array.sort()

A função **.sort()** permite ordenar um array de acordo com algum critério estabelecido.

>Como default ela irá organizar os itens de um array em ordem alfabética, mesmo que o item do array seja um número. Nesse caso ele irá transformar esse número em uma string, e ordenar alfabéticamente, a menos que uma condição de ordenação seja estipulada.

#### Exemplo 1 - Array de strings:
```javascript
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
```

#### Exemplo 2 - Array de números:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
```

Como pode notar, a forma como ela organiza os elementos do array não é tão intuitiva. Isso ocorre, pois ela distribui sempre por ordem alfabética . No caso, quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode!

>Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:
#### Exemplo 3 - Ordenando um array de números:
```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
```