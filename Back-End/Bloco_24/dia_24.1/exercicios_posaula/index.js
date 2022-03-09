const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controller/booksController');
const authorRouter = require('./controller/authorController')

const app = express();

app.use(bodyParser.json());

app.use('/books', booksRouter);
app.use('/author', authorRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));