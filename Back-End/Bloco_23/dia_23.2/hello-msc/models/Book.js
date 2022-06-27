// models/Book.js

const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};


const getById = async (bookId) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [book] = await connection.execute(query, [bookId]);
  
  if (book.length === 0) return null;

  const { id, title, author_id } = book[0];

  return {
    id,
    title,
    authorId: author_id,
  };
}

const createBook = async (title, bookId) => {
  const [book] = await connection.execute(
    'INSERT INTO model_example.books (title, book_id) VALUES (?,?)',
  [title, bookId],
  );
  return ({ id: book.insertId, title, bookId });
};

module.exports = {
  getAll,
  getById,
  createBook,
};