const connection = require('./connection');

// método para filtrar autores que tenham o middlename e inserir um full name;
const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [ firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName: fullName,
  }
}

// Método para criar um novo objeto mudando de snake case para camelCase.
const serialize = (authorData) => {
  return{
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize).map(getNewAuthor); // Método para mapear os autores com os novos métodos.
};

module.exports = {
  getAll,
}