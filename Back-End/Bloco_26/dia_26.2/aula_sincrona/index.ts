// Tipos de Coleções

// Arrays
////////////////////////////////////

let names: string[] = ['Carlos', 'Gustavo']

const ages: number[] = [27, 28];

// Tuplas
////////////////////////////////////
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

console.log(car[0]);
console.log(car[2]);


// Type Aliases
////////////////////////////////////

type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

// exercises

type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}

type Sum = (x: number, y: number) => number;

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

// Type Unions
////////////////////////////////////

// A função abaixo pode receber tanto um número
// quanto uma string.
function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

type StatesOfMatter = "liquid" | "solid" | "gaseous";

type IdentifyingDocument = string | number;

type SO = "linux" | "mac os" | "windows";

type Vowels = "a" | "e" | "i" | "o" | "u";

// Interfaces
////////////////////////////////////

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

// Interfaces podem extender de outras interfaces, ou seja, isso indicar que nova interface deve ter tudo que aquela da qual ela extendeu mais alguns outros atributos.
interface Teacher extends Employee {
  sayHello(): string;
  subject: string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

// exercises Interfaces

interface Car {
  marca: string
  cavalos: number
  portNum: number
}

interface Felino {
  patas: number
  familia: string
}

// Classes
////////////////////////////////////

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

  // aprenderemos mais sobre o construtor no próximo bloco
  // considere-o como uma função utilizada para construir um objeto a partir da classe,
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
      // usamos o this para acessar as propriedades da instância da classe,
      // ele representa a própria instância que estamos criando
      // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."


// Generics
////////////////////////////////////

function firstElement<T>(arr: T[]): T {
  return arr[0]
};

console.log(firstElement([1,2,3]));
console.log(firstElement(['a', 'b', 'c']));

function mergeObjects<U, T>(obj1: U, obj2:T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: 'Carlos'}, {age:30, job: "dev"});
console.log(newObject);