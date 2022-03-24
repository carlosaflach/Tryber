// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));

console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm, tem área de: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm, tem área de: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm, tem área de: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm, tem área de: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm, tem área de: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm, tem área de: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm, tem área de: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm, tem área de: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm, tem área de: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango com D = 32cm e d = 18cm, tem área de ${Exercise.diamond(32,18)}cm²`);
console.log(`Losango com D = 200cm e d = 50cm, tem área de ${Exercise.diamond(200,50)}cm²`);
console.log(`Losango com D = 75cm e d = 25cm, tem área de ${Exercise.diamond(75,25)}cm²`);

console.log(`Trapezio com B = 100cm, b = 70cm e h = 50cm, tem área de: ${Exercise.trapeze(100, 70, 50)}cm²`); 
console.log(`Trapezio com B = 75cm, b = 50cm e h = 35cm, tem área de: ${Exercise.trapeze(75, 50, 35)}cm²`); 
console.log(`Trapezio com B = 150cm, b = 120cm e h = 80cm, tem área de: ${Exercise.trapeze(150, 120, 80)}cm²`);

console.log(`Circulo com raio igual a 25 cm, tem área de: ${Exercise.circle(25)}cm²`);
console.log(`Circulo com raio igual a 100 cm, tem área de: ${Exercise.circle(100)}cm²`);
console.log(`Circulo com raio igual a 12.5 cm, tem área de: ${Exercise.circle(12.5)}cm²`);
