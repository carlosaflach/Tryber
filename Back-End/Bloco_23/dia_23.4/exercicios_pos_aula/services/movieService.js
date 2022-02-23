const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};


const findById = async (id) => {
  
  if(!id) return null;
  
  const movie = await MoviesModel.findById(id);
  const newMovie = {
    id: movie.id,
    title: movie.title,
    directedBy: movie.directed_by,
    releaseYear: movie.release_year,
  }
  return newMovie;
}

module.exports = {
  create,
  findById,
};