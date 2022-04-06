interface newAnimal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class newBird implements newAnimal {
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

const newparrot = new newBird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(newparrot.age);
newparrot.fly();

/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/