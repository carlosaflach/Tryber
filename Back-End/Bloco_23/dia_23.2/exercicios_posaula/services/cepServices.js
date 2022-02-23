const isValidCep = (cep) => {
  const validate = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/;

  if(!validate.test(cep)) return false;

  return true;
}


const getCep = async () => {

};

module.exports = {
  getCep,
}