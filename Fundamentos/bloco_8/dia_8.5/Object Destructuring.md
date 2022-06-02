# Object Destructuring
>Outro feature do ES6 que é chamado de desestruturação de objetos. Serve justamente para mudar forma que acessamos chaves/propriedades dentro de um objeto.

## Sintaxe
```javascript
const { propriedade1, propriedade2 .. } = objeto
```

### Exemplo 1 - Usando a forma normal:
```javascript
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
console.log(product.name); //Smart TV Crystal UHD
```

### Exemplo 2 - Usando o Object Destructuring.
```javascript
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const { name } = product;
console.log(name); // Smart TV Crystal UHD
```
> Dessa forma atribuimos uma variável a chave name, com o mesmo nome, e ao chamar essa variável,estamos fazendo a mesma operação de <product.name>, usando o dot notation.

> É possível ainda, declarar mais de uma variável para acessar outras propriedades desse objeto.
```javascript
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas
```
## Outras features do Object Destructuring:

### Possibiliodade de reatribuir nomes de uma propriedade
## Sintaxe
```javascript
const { propriedade: nomeVariável } = objeto
```

#### Exemplo 1:
```javascript
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
```
> Nesse exemplo, como os nomes iniciais das propriedades do objeto student não eram muito descritivas, foram reatribuídas propriedades mais descritivas.

### Possibilidade de desestruturação de um objeto quando queremos passar suas propriedades como parâmetros para uma função:

#### Exemplo 1:
```javascript
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
```
>Note que foi passado como parâmetro para a função o proprio objeto, e os parâmetros que essa função aceita, são as propriedades do objeto.

