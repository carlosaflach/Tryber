const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.

const arraySort = (array) => {
  const sortOddsAndEvens = array.sort((a,b) => a-b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = arraySort(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);