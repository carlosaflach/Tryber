const express = require('express');
const BooksController = require('../controllers/bookController'); // importamos o controller aqui

const bookRouter = express.Router();

bookRouter.get('/', BooksController.getAll);
bookRouter.get('/:id', BooksController.findById);
bookRouter.post('/', BooksController.create);
bookRouter.delete('/:id', BooksController.deleteBook);

module.exports = bookRouter;