const express = require('express');
const BooksController = require('../controllers/bookController'); // importamos o controller aqui

const bookRouter = express.Router();

bookRouter.get('/', BooksController.getAll);
bookRouter.get('/:id', BooksController.findById);

module.exports = bookRouter;