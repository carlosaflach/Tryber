const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controller/booksController');

const app = express();

app.use(bodyParser.json());

app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));