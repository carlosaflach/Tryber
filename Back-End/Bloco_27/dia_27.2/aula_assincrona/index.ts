// class Animal {
//   /*
//     Ao invés de declarar os atributos antes do construtor, receber parâmetros
//     no construtor e colocá-los nos atributos da classe, se não formos
//     validar, podemos utilizar uma forma simplificada de escrita, simplesmente
//     colocando o modificador de visibilidade na frente
//     do nome do parâmetro no construtor

//     Exemplo
//     O seguinte código:

//     public x: number
//     constructor(x: number) { this.x = x }

//     Pode ser substituído por:

//     constructor(public x: number) { }
    
//     Obs: Usando essa sintaxe é necessário indicar explicitamente 
//     logo antes do nome do atributo se ele é public, private, protected ou readonly
//   */
//   constructor(public name: string, protected birthDate: Date) { }

//   get age() {
//     /*Para operar com datas, vamos operar somente com milissegundos. Uma data
//     é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
//     const timeDiff = Math.abs(
//       Date.now() -
//       new Date(this.birthDate).getTime()
//     );

//     /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
//     Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }
// }

// class Mammal extends Animal {
//   walk() {
//     console.log(`${this.name} está andando!`);
//   }
// }

// const tiger = new Mammal(
//   'Tigre',
//   new Date(Date.parse('May 03, 2020')),
// );

// //
// const main = (animal: Animal) => {
//   console.log(animal.age);
// }

// // OU
// main(tiger);
// console.log(tiger.age);

// tiger.walk();

// /*
// Saída (código rodado em Mar/2022):

// Tigre está andando!
// */


// class Bird extends Animal {
//   constructor(public name: string) {
//     super(name, new Date())
//   }

//   fly() {
//     console.log(`${this.name} está voando!`);
//   }

//   showBirthDate() {
//     console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
//   }
// }

// const parrot = new Bird('Papagaio');

// console.log(parrot.age);
// parrot.fly();
// parrot.showBirthDate()

// /*
// Saída (código executado em Mar/2022):

// Papagaio está voando!
// */

// Interface

interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Bird implements Animal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot.age);
parrot.fly();

/*
Saída (código executado em Mar/2022):

Papagaio está voando!
*/