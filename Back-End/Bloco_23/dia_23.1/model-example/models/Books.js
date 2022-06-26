
const connection = require('./connection');

const Author = require('./Author');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    `SELECT id, title, author_id FROM model_example.books`,
  )
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(query,[authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const findById = async (id) => {
	// Repare que substituímos o id por `?` na query.
	// Depois, ao executá-la, informamos um array com o id para o método `execute`.
	// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
	const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?'
	const [ bookData ] = await connection.execute(query, [id]);

	if (bookData.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	
  return bookData.map(({ id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));

};

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!author_id || typeof author_id !== 'number' || !(await Author.findById(author_id))) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = {
  getAllBooks,
  getByAuthorId,
  findById,
  isValid,
  create,
}