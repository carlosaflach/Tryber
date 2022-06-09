// Ex03


async function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber); // função que gera um array de 3 posições, e cria um array de números aleatórios.
  console.log(randomNumbers);

  try {
    const result = await doMath(...randomNumbers)
    return console.log(result);

  } catch (e) {
    console.log(e.message);
  } 
}

