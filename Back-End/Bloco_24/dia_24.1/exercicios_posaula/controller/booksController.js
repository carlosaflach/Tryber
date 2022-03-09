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

booksRouter.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });
    res.status(201).json(book);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});


booksRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();
    
    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

booksRouter.post('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;
    
    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
      );
      
      res.status(200);
      res.json(result);
    } catch (err) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });
  
  booksRouter.get('/:id', async (req, res) => {
  try {
    
    const { id } = req.params;
    const books = await Book.findByPk(id);
    if(!books) return res.status(404).json({ message: "Books not found"});
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});







module.exports = booksRouter;
