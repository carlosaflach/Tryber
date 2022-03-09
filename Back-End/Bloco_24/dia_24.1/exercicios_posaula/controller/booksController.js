const express = require('express');
const booksRouter = express.Router();

const { Book } = require('../models');

booksRouter.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();

    if(!books) return res.status(404).json({ message: "Books not found"});

    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});



module.exports = booksRouter;
