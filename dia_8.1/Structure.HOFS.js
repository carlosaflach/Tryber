// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);


const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {  // aqui ele faz a chamada de uma função anonima arrow function, que vai verificar uma condição e nesse caso imprimir uma saida.
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});