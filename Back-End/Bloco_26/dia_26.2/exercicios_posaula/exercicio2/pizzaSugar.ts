import Pizza from "./pizza";
import { Sugar } from "./pizzaFlavors";

interface PizzaSugar extends Pizza {
    flavor: Sugar,
    slices: 4
}

export default PizzaSugar;