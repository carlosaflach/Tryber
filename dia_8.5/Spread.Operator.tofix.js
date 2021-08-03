// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['queijo', 'leite', 'bife de gado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const groceryList = [...fruit,...additional];
  return groceryList;
};

console.log(fruitSalad(specialFruit, additionalItens));