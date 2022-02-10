const promiseFunc = require('./exercise1');

// const a = Math.floor(Math.random() * 100 + 1);
// const b = Math.floor(Math.random() * 100 + 1);
// const c = Math.floor(Math.random() * 100 + 1);

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}


// Utilizando outro método de resolução.

// function callDoMath() {
//   /* Criamos um novo array de 3 posições
//    * e utilizamos o `map` para gerar um número aleatório
//    * para cada posição do Array
//    */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
//   console.log(randomNumbers)
// 4
//   promiseFunc(...randomNumbers)
// .then(response => console.log(response))
// .catch(error => console.log(error))
// }

// callDoMath()

const doMath = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const c = getRandomNumber();
  console.log(a,b,c);
  promiseFunc(a,b,c)
  .then(response => console.log(response))
  .catch(error => console.log(error))

  promiseFunc(a,"b",c)
.then(response => console.log(response))
.catch(error => console.log(error))
}

doMath()