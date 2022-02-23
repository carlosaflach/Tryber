const isValidCep = (cep) => {
  const validate = /\d{5}-\d{3}/;

  if(validate.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}


const getCep = async () => {

};

module.exports = {
  getCep,
}