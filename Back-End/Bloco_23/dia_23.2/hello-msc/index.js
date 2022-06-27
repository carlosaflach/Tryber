// index.js

const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Author = require('./controllers/Author');
const Book = require('./controllers/Book');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.get('/books', rescue(Book.getAll));
app.get('/books/:id', rescue(Book.findById));
app.post('/books', rescue(Book.createBook));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});