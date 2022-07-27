// Tipos Primitivos - Annotation: Quando anotamos de forma manualmente.

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

