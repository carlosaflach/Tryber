const techList = (arr, nome) => {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  arr.sort();
  const newArray = arr.map((el) => {
    return { tech: el, name: nome, };
  })
  return newArray;
};

module.exports = techList;