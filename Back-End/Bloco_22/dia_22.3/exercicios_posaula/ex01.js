
const checkNumber = (num) => {
  if(num > 0) return 'positivo';
  if(num < 0) return 'negativo';
  if(num === 0) return 'neutro';
  if(isNaN(num)) {
    throw new Error('O número informado não é um número');
    return;
  }
};

module.exports = checkNumber;