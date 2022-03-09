const express = require('express');
const authorRouter = express.Router();

const { Book } = require('../models');

authorRouter.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const books = await Book.findAll({ where: { author: name } });
    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = authorRouter;