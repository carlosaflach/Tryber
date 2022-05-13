const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());
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

app.post('/authors', async(req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Author.isValid(first_name,middle_name, last_name)) {
    return res.status(400).json({message: 'Dados inválidos'});
  }

  await Author.create(first_name, middle_name, last_name);
  res.status(200).json({message: 'Autor criado com sucesso!'});
});

app.get('/books', async (req, res) => {
  const books = await Book.getAllBooks();

  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getByAuthorId(id);
  if(!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
})



app.listen(port, () => console.log(`Example app listening on port 3000`))