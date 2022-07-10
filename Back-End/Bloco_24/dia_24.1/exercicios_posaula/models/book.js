'use strict'

const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    uderscored: true,
    tableName: 'Books',
  });

  return Book;
};

module.exports = Book;