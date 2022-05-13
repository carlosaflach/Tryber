const connection = require('./connection');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email}) => {
  return {
    id,
    firstName, 
    lastName,
    email,
  }
};

const createUser = ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return connection.execute(query, [firstName, lastName, email, password]).then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}


module.exports = {
  create: createUser,
}