// Para testar!
// ./index.ts

// import Person from './Person'

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);

// // deve retornar erro
// // const invalidPersonName = new Person('An', new Date('2000/06/07'));
// // deve retornar erro
// // const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));


// import Student from './Student';

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
// const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

// carolina.examsGrades = [25, 20, 25, 23];
// lucas.examsGrades = [25, 20, 25, 23];
// jessica.worksGrades = [50, 45];
// tamires.worksGrades = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// deve retornar erro
// fernando.worksGrades = [45, 45, 45];

// import Employee from './Employee';

// const testInterfaceEmployee: Employee = {
//     registration: 'FNC1234567891011',
//     salary: 1200.00,
//     admissionDate: new Date(),
//     generateRegistration(): string {
//         const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//         return `FNC${randomStr}`;
//     }
// }

// console.log(testInterfaceEmployee);

// import Subject from './Subject';

// const math = new Subject('Matemática');
// const history = new Subject('História');
// const philosophy = new Subject('Filosofia');

// console.log(math);
// console.log(history);
// console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');

// Para testar!
// ./index.ts

import Subject from './Subject';
import Teacher from './Teacher';

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
// const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), -2000, math);
// console.log(invalidTeacherSalary );

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;