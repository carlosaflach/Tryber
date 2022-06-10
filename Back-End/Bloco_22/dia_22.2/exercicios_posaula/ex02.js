  const doMath = require('./ex01');
  
  // Ex02

  function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }


  function callDoMath() {
    /* Criamos um novo array de 3 posições
     * e utilizamos o `map` para gerar um número aleatório
     * para cada posição do Array
     */
    const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber); // função que gera um array de 3 posições, e cria um array de números aleatórios.
    console.log(randomNumbers);
  
    return randomNumbers;
  }

  doMath(...callDoMath())
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));