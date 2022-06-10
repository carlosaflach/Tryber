function fizzBuzz(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return resolve('FizzBuzz');
    }

    if (number % 3 === 0) {
      return resolve('Fizz');
    }

    if (number % 5 === 0) {
      return resolve('Buzz');
    }

    reject(number);
  });
}

// note que apenas estamos passando a referência das funções `error` e `log`
// isso é possível pois só queremos encaminhar o exato mesmo parâmetro que vem do callback
fizzBuzz(1).catch(console.error);
fizzBuzz(3).then(console.log);
fizzBuzz(5).then(console.log);
fizzBuzz(15).then(console.log);

// uma alternativa seria chamar o `console` dentro de uma arrow function:
fizzBuzz(1).catch((error) => console.error(error));
fizzBuzz(3).then((response) => console.log(response));