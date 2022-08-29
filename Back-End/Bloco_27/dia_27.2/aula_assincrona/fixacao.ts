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

// Interfaces

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {

  constructor(public myNumber: number) {

  }

  public myFunc(myParam: number): string {
    return String(myParam + this.myNumber);
  }
};

const test = new MyClass(2);
console.log(test.myFunc(2));

// Fixação 3

interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log('Loogger1', param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    // No `console.log` dentro do método `log`, diferencie o _ConsoleLogger2_ do _ConsoleLogger_.
    console.log('Logger2: ' + param);
  }
}

interface Database {
  // _Database_ deve possuir um atributo do tipo `Logger`.
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');