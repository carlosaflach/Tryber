// Exercicio 1.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  return number % 3 === 0 && number % 5 === 0;
}
const itsNumber = numbers.find(findDivisibleBy3And5);

console.log(itsNumber);

// Exercicio 2.

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  return name.length >= 5;
}

const theName = names.find(findNameWithFiveLetters);

console.log(theName);

// exercicio 3.

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === '31031685');
}

console.log(findMusic('31031685'))