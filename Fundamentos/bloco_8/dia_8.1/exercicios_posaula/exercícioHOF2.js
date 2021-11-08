const hof = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) +1);

  return callback(myNumber, number) ? 'Lucky day, you won' : 'Try again'; // a inicialização da função numberChecker é feita aqui.
}

const numberChecker = (myNumber, number) => myNumber === number;

console.log(hof(2,numberChecker)); // não inicializar a função agora. somente chamar mas sem inicializar ().