const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll(); // Função do Sequelize que busca todos.
  return books;
};

module.exports = {
  getAll,
};