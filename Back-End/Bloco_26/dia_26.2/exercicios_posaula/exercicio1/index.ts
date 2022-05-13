
// ./index.ts

import Car from "./car";
import Colors from "./colors";
import Directions from "./directions";
import Doors from "./doors";


const gol = new Car("Volksvagem", Colors.SILVER, 4);

gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();