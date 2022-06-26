// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Books')

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAllBooks();

  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.create(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const book = await Book.findById(id);

	if (!book) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(book);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});