class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  // Mude a visibilidade do método `sayHello` de _public_ para _protected_.
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }

  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  // Dentro da função que recebe um objeto da _Superclass_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);