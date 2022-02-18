const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
const port = 3000;

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const books = await Book.getAllBooks();

  res.status(200).json(books);
})



app.listen(port, () => console.log(`Example app listening on port 3000`))