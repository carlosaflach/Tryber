const BookService = require('../services/bookService');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    res.status(200).json(books);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Something goes wrong!!'});
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.findById(Number(id));

    if(!book) return res.staus(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Something goes wrong!!'});
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.create(title, author, pageQuantity);

    return res.status(201).json(newBook);
  
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Something goes wrong!!'});
  }
};

module.exports = {
  getAll,
  findById,
  create
};