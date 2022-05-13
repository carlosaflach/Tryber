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

// promiseFunc(10,20,40)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

// promiseFunc(1,20,1)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

// promiseFunc(10,'s',40)
// .then(resolve => console.log(resolve))
// .catch(error => console.log(error))

module.exports = promiseFunc;