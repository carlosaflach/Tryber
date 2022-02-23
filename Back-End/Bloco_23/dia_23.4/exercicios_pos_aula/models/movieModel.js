const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const query = `INSERT INTO model_example.movies (title, directed_by, release_year)
    VALUES (?, ?, ?)`
  const [result] = await connection.execute(query, [title, directedBy, releaseYear]);

  return { 
    id: result.insertId,
  };
};

const getAll = async () => { 
  const query = 'SELECT * FROM model_example.movies';
  const [movie] = await connection.execute(query);

  if(!movie) return null;

  return movie;
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.movies WHERE id = ?';

  const [movie] = await connection.execute(query, [id]);

  if (movie.length === 0) return null;

  const { title, directedBy, releaseYear } = movie[0];

  return {
    id,
    title,
    directedBy,
    releaseYear,
  };
};

module.exports = {
  create,
  getById,
  getAll
}