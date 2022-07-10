const BookService = require('../services/bookService');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    res.status(200).json(books);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Algo deu errado'})
  }
};

module.exports = {
  getAll,
};