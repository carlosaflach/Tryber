const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books');

  return books;
}

const getByAuthorId = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?'
  const [ bookData ] = await connection.execute(query, [id]);

  if(bookData.length === 0) return null;

  return bookData;
}

module.exports = {
  getAllBooks,
  getByAuthorId,
}
