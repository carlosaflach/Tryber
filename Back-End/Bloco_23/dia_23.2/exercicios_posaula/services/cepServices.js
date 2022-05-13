const Cep = require('../models/cepModel');

const findAddressByCep = async (searchedCep) => {
  // Buscamos o CEP através do Model
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso não encontre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  // Por fim, retornamos o CEP correto
  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await Cep.findAddressByCep(cep);

  if(existingCep) {
    return { 
      error: {
        code: 'alreadyExists',
        message: 'Cep já existente',
      },
    };
  };

  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  create,
};