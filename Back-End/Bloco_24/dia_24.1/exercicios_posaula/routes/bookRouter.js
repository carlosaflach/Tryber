const express = require('express');
const BooksController = require('../controllers/bookController'); // importamos o controller aqui

const bookRouter = express.Router();

bookRouter.get('/', BooksController.getAll);

module.exports = bookRouter;