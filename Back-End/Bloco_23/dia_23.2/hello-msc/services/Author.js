
// services/Authors.js

const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

const createAuthor = async (firstName, middleName, lastName) =>
  Author.createAuthor(firstName, middleName, lastName);

module.exports = {
  getAll,
  findById,
  createAuthor,
};