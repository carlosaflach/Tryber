class Superclass  {
  // A _Superclass_ deve possuir um atributo público _isSuper_.
  public isSuper: boolean;
  constructor() {
    // isSuper deve ser setado como true na inicialização.
    this.isSuper = true;
  }

  //A Superclass deve possuir um método público chamado sayHello, que deve imprimir "Olá mundo!".
  public sayHello(): void {
    console.log("Olá Mundo!");
  }
}

class SubClass extends Superclass {

}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
};

const sup = new Superclass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);