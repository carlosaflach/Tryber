
const ex1func = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error("Informe apenas números"));

    const resultado = ((a + b) * c);

    if(resultado < 50) reject(new Error('Valor muito baixo'));

    resolve(resultado);
  });

  return promise;
}

// ex1func(10, 10, 10)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));

// ex1func(1, 1, 'a')
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));

// ex1func(1, 1, 1)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));

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

  ex1func(...callDoMath())
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
