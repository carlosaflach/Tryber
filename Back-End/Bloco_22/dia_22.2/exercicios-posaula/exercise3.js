const promiseFunc = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number'  || typeof c !== 'number' ) reject("Informe apenas números")

    const result = ((a + b) * c);
    if(result < 50) reject("Valor muito baixo")
    else {
      resolve(result);
    }
  })
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}


const doMath = async () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const c = getRandomNumber();
  console.log(a,b,c);
  
  try {
    const response = await promiseFunc(a,b,c)
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await promiseFunc(a,'b',c)
    console.log(response);
  } catch (error) {
    console.log(error);
  }

}

doMath()