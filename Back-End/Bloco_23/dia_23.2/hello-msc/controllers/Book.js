// controllers/Book.js

const Joi = require('joi');
const Book = require('../services/Book');

const getAll = async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.findById(Number(id));

  if (book.error) return next(book.error);

  return res.status(200).json(book);
};

const createBook = async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.string().not().empty().required(),
  })
    .validate(req.body);

  if (error) return next(error);

  const { title, bookId } = req.body;

  const newBook = await Book.createBook(title, bookId);

  if (newBook.error) return next(newBook.error);

  return res.status(201).json(newBook);
};

module.exports = {
  getAll,
  findById,
  createBook,
};