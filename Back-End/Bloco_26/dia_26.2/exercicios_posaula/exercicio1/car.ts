import Colors from "./colors";
import Directions from "./directions";
import Doors from "./doors";

class Car {
    _make: string;
    _color: Colors;
    _doors: number;

    constructor(make: string, color: Colors, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }

    turnOn(): void {
        console.log("Ligando carro.");
    }

    turnOff(): void {
        console.log("Desligando carro.");
    }

    turn(direction: Directions): void {
        console.log(`Virando para a ${direction}.`);
    }

    speedUp(): void {
        console.log("Acelerando carro.");
    }

    speedDown(): void {
        console.log("Reduzindo a velocidade do carro.");
    }

    stop(): void {
        console.log("Parando carro.");
    }

    honk(): void {
        console.log("Buzinando: BIP BIP");
    }

    openTheDoor(door: Doors): void {
        console.log(`Abrindo a porta: ${door}.`);
    }

    closeTheDoor(door: Doors): void {
        console.log(`Fechando a porta: ${door}.`);
    }

}

export default Car;