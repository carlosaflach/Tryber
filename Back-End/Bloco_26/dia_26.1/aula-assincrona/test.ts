enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}
let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

// Enums suportam o acesso ao dado em ambos os lados: Da chave ao valor e do valor à chave.

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes[200];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //OK
console.log(stringBadRequest); //saída: BadRequest

enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGTH = "RIGHT",
}

console.log(directionsGamePad.UP); // UP
console.log(directionsGamePad["UP"]); // UP

// Exercise: Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.

enum weekDays {
  monday = 1,
  tuesday,
  wednesday,
  thrusday,
  friday,
}

console.log(weekDays.monday); // 1
console.log(weekDays[2]); // tuesday
console.log(weekDays.tuesday); // 2

enum RainbowColors {
  Red = "Vermelho",
  Orange = "Laranja",
  Yellow = "Amarelo",
  Green = "Verde",
  Blue = "Azul",
  Indigo = "Anil",
  Violet = "Violeta",
}

enum Actions {
  Save,
  Print,
  Open,
  View,
  Close,
}

enum CardinalPoints {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

