const BookService = require("../services/bookService");

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books;

    if (author) {
      books = await BookService.getByAuthor(author);
    } else {
      books = await BookService.getAll();
    }

    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something goes wrong!!" });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.findById(Number(id));

    if (!book) return res.staus(404).json({ message: "Book not found" });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something goes wrong!!" });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.create(title, author, pageQuantity, publisher);

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something goes wrong!!" });
  }
};

const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;
    const editedBook = await BookService.editBook(
      Number(id),
      title,
      author,
      pageQuantity,
      publisher
    );

    if (!editedBook) return res.staus(404).json({ message: "Book not found" });

    return res.status(200).json({ message: "Book Updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something goes wrong!!" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const isDeleted = await BookService.deleteBook(Number(id));
    if (!isDeleted) return res.staus(404).json({ message: "Book not found" });

    return res.status(200).json({ message: "Succeed in delete this book" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something goes wrong!!" });
  }
};

module.exports = {
  getAll,
  findById,
  create,
  deleteBook,
  editBook,
};
