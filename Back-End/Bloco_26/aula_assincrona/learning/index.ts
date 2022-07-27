
// Tipos Primitivos - Annotation: Quando anotamos de forma manualmente.
///////////////////////////////////////////////

// boolean
let yes: boolean = true;
let no: boolean = false; 

// number
let x: number;

let y: number = 0;
let z: number = 123.456;
console.log(z);

// string
let s: string;
let empty: string = "";
let abc: string = 'abc';

// Void - Ausencia de valor Ex: função sem retorno.
function sayHelloWorld(): void {
  console.log("Hello World!");
}

// null e undefined
let nullValue = null;
let undefinedValue = undefined;

// Inferência de tipo

let nome = "Carlos";
// nome = 1 // A inferência de tipo vai identificar que nome é do tipo string e não vai deixar mudar o valor para um numero por exemplo.

nome ='Joane'; // Aqui ok pois é do mesmo tipo.

let possuiHobby = false;

// possuiHobby = 1; // Também irá reclamar, ou seja mudança de tipo.


// Enum - Enumerações
// Estruturas para definir valores predefinidos: Exemplo => Dia de semanas (Melhor forma de representar é através de Enum);
///////////////////////////////////////////////
enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Paused; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringOk = StatusCodes[200];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringOk);
console.log(stringBadRequest); //saída: BadRequest


enum Cor {
  Cinza,
  Verde,
  Azul,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// Exercicios

enum dayOfWeek {
  sunday = 'Domingo',
  monday = 'Segunda',
  tuesday = 'Terça',
  wednesday ='Quarta',
  thrusday = 'Quinta',
  friday = 'Sexta',
  saturday = 'Sábado'
}

console.log(dayOfWeek.sunday);

enum actions {
  salvar =1,
  imprimir, 
  abrir,
  visualizar,
  fechar,
}

enum directions {
  Norte = "N",
  Sul = 'S',
  Leste ='L',
  Oeste = 'O'
}