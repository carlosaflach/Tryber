const cepService = require('../services/cepServices');

const getCep = async (req, res, next) => {

  try {
    const cep = await  cepService.getCep();
    const message = {  error: { "code": "invalidData", "message": "CEP inválido" } };

  if(!cep) return res.status(400).json(message);

  res.status(200).json(cep);

  } catch (e) {
    next(e);
  }
  
};

module.exports = {
  getCep,
}