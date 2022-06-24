// index.js
require('dotenv').config();
const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Books')

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await Book.getAllBooks();

  res.status(200).json(books);
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});