const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll(); // Função do Sequelize que busca todos.
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};
module.exports = {
  getAll,
  findById,
  create
};