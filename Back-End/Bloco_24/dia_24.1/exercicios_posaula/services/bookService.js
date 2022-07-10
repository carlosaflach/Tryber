const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({ order: [['title', 'ASC']], }); // Função do Sequelize que busca todos.
  return books;
};

const findById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const editBook = async (id, title, author, pageQuantity, publisher) => {
  const [editedBook] = await Book.update({ title, author, pageQuantity, publisher }, { where: { id } },);

  return editedBook;
};

const deleteBook = async (id) => {
  const deleteBook = await Book.destroy({ where: { id }});

  return deleteBook;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author }, order: [['title', 'ASC']], });
  return books;
};

module.exports = {
  getAll,
  findById,
  create,
  deleteBook,
  editBook,
  getByAuthor,
};