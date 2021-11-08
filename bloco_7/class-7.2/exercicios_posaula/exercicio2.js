const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addMorningPeriod = (obj, key, value) => {
  // Adiciona o turno da manhã no objeto lesson2.
  obj[key] = value; // o key ja possui as aspas. Logo adiciona de maneira correta.
  //console.log(lesson2);
}

addMorningPeriod(lesson2, 'turno', 'manhã');

// 2
const listKeys = (obj) => Object.keys(obj);
//console.log(listKeys(lesson2));

// 3
const objLength = (obj) => Object.keys(obj).length;
//console.log (objLength(lesson2));

// 4
const objValues = obj => Object.values(obj);
//console.log (objValues(lesson1));

// 5 

const allLessons = Object.assign({},{lesson1,lesson2,lesson3});
//console.log(allLessons);

// 6
const numberStudents = obj => {
  let cont = 0;
  let students = Object.keys(obj);
  for(index in students) {
    cont += obj[students[index]].numeroEstudantes
  }
  return cont;
}
//console.log(numberStudents(allLessons));

// 7

const valueKey = (obj, number) => {
  console.log(Object.values(obj)[number]);
}

valueKey(lesson1, 1);
