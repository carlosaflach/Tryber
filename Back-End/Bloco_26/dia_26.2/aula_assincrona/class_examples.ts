// Array

let names: string[] = ['Carlos', 'Emeli', 'Gustavo'];

// Tuplas

let fullName: [string, string] = ['John', 'Doe'];

// Type Aliases

type Point = {
  x: number,
  y: number,
};

const printCoord = (pt: Point): void => {
  console.log("O valor da coordenada x é:", pt.x);

  console.log("O valor da coordenada y é:", pt.x);
};

printCoord({ x:100, y: 100 });

// Exercises

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

const Soma: Sum = (x: number, y: number) => {
  return x + y;
};

console.log(Soma(2,3));

// Type Unions

// A função abaixo pode receber tanto um número
// quanto uma string.
function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

type state = "solid" | "liquid" | "gaseous"

type IdentifyingDocument = string | number;

type SO = "linux" | "mac os" | "windows";

type Vowels = "a" | "e" | "i" | "o" | "u";

// Classes

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}
// Você deve criar uma instância de pessoa da classe Person antes que ela se torne um objeto ao qual você possa atribuir valores de propriedade (como definir a cor dos olhos como azul) ou chamar suas ações (como falar).
// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

  // aprenderemos mais sobre o construtor no próximo bloco
  // considere-o como uma função utilizada para construir um objeto a partir da classe
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
      // usamos o this para acessar as propriedades da instância da classe
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

console.log(person2);
person2.walk();

// Exercicises Classes

class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  
  bark(): void {
    console.log("Au Au");
  }
}

const dog1 = new Dog('Pitty', 'Black', 12);
console.log(dog1);
dog1.bark();

class House {
  _owner: string;
  _address: string;
  _color: string;
  _area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this._owner = owner;
    this._address = address;
    this._color = color;
    this._area = area;
  }
}

class Flight {
  _origin: string;
  _destination: string;
  _departureDate: Date;
  _arrivalDate: Date;
  _passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this._origin = origin;
    this._destination = destination;
    this._departureDate = departureDate;
    this._arrivalDate = arrivalDate;
    this._passengers = passengers;
  }
}

// Interfaces