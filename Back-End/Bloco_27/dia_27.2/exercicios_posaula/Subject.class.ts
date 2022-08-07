export default class Subject {
  constructor(private _name:string) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.nameValidation(value);
    this._name = value;
  }

  private nameValidation(value: string):void {
    if(value.length < 3) throw new Error('O nome deve ter no mínimo 3 caracteres');
  }
}

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');