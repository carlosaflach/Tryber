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

const isValidId = (id) => {
  if(!id || typeof id !== 'number' || !Number.isInteger(id)) return false;

  return true;
}

const findById = async (id) => {
  const isValid = isValidId(id);

  if(!isValid) return null;

  const {id, title, directed_by, release_year }= await MoviesModel.findById(id);
  const newMovie = {
    id,
    title,
    directedBy: directed_by,
    releaseYear: release_year,
  }
  return newMovie;
}

module.exports = {
  create,
  findById,
};