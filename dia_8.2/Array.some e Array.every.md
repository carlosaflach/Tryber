# Array.some e Array.every

Essas duas funções são funções muito parecidas
* A primeira, `Array.some`, retorna true se **ao menos** um elemento do array satisfaz a condição.
* A segunda, `Array.every`, retorna true se **todos** os elementos do array satisfaçam a condição.

#### Exemplo de array.some:
```javascript
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
```
Nesse exemplo, estamos querendo que ele verifique se a inicial de algum elemento do array `listNames` seja igual a J ou X.

---

Neste outro exemplo, utilizamos o `array.every`.

#### Exemplo de array.every:
```javascript
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
```
Observe que para este código em específico, ele transforma os valores do objeto `grades`, em um array, utilizando o `Object.values`, e após ele usa a função `.every((grade)=> grade === 'Aprovado')`.
