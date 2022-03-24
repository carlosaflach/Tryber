"use strict";
// ./index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
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
console.log(`Losango com D = 32cm e d = 18cm, tem área de ${Exercise.diamond(32, 18)}cm²`);
console.log(`Losango com D = 200cm e d = 50cm, tem área de ${Exercise.diamond(200, 50)}cm²`);
console.log(`Losango com D = 75cm e d = 25cm, tem área de ${Exercise.diamond(75, 25)}cm²`);
console.log(`Trapezio com B = 100cm, b = 70cm e h = 50cm, tem área de: ${Exercise.trapeze(100, 70, 50)}cm²`);
console.log(`Trapezio com B = 75cm, b = 50cm e h = 35cm, tem área de: ${Exercise.trapeze(75, 50, 35)}cm²`);
console.log(`Trapezio com B = 150cm, b = 120cm e h = 80cm, tem área de: ${Exercise.trapeze(150, 120, 80)}cm²`);
console.log(`Circulo com raio igual a 25 cm, tem área de: ${Exercise.circle(25)}cm²`);
console.log(`Circulo com raio igual a 100 cm, tem área de: ${Exercise.circle(100)}cm²`);
console.log(`Circulo com raio igual a 12.5 cm, tem área de: ${Exercise.circle(12.5)}cm²`);
