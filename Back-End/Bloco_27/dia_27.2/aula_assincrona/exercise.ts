class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Hello World!');
  }
}

class Subclass extends Superclass {

}

// Crie uma função que recebe um objeto da _Superclass_.
const myFunc = (object: Superclass) => {
  // Dentro da função, chame o método `sayHello` do objeto passado como parâmetro.
  object.sayHello();
};

// Crie um objeto da _Superclass_ e outro da _Subclass_.
const sup = new Superclass();
const sub = new Subclass();

// Chame a função 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);