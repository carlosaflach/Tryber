// index.js

const express = require('express');
const bodyParser = require('body-parser');

const rescue = require('express-rescue');

const Author = require('./controllers/Authors');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));

app.get('/authors/:id', rescue(Author.findById));

app.post('/authors', rescue(Author.createAuthor));
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});