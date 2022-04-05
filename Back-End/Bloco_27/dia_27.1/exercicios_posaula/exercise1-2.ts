class Student {
  private _enrollment: string;
  private _name: string = String();
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this.name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres.");
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error("A pessoa estudante só pode possuir 4 notas de provas.");
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        "A pessoa estudante só pode possuir 2 notas de trabalhos."
      );
    }

    this._worksGrades = value;
  }

  sumNotes(): number {
    return [...this.examsGrades, ...this.worksGrades].reduce(
      (previousNote, note) => {
        note += previousNote;

        return note;
      },
      0
    );
  }

  sumAverageNotes(): number {
    const sumNotes = this.sumNotes();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumNotes / divider);
  }
}

// Para testar!

const personOne = new Student("202001011", "Maria da Silva");

console.log(personOne);

const personTwo = new Student("202001012", "João da Silva");

console.log(personTwo);
console.log(personOne.enrollment);
console.log(personTwo.enrollment);

// Exams grades
personOne.examsGrades = [7,8,4,5];
personOne.worksGrades = [5, 7];
console.log(personOne.examsGrades);
console.log(personOne.worksGrades);
console.log(personOne.sumNotes());
console.log(personOne.sumAverageNotes());
