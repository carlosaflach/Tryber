const newEmployees = (func) => {
  const employees = {
    id1: func ('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func ('Marcelo Souza'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func ('Carlos Flach'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newPerson = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {
    name: fullName,
    email: `${email}@trybe.com`
  }
}

console.log(newEmployees(newPerson));