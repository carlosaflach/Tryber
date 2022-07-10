const express = require('express');
const BooksController = require('../controllers/bookController'); // importamos o controller aqui

const bookRouter = express.Router();

bookRouter.get('/', BooksController.getAll);
bookRouter.get('/:id', BooksController.findById);
bookRouter.post('/', BooksController.create);

module.exports = bookRouter;