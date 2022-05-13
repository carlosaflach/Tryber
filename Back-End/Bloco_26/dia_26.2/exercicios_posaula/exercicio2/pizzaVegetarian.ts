// ./PizzaVegetarian.ts

import Pizza from "./pizza";
import { Vegetarian } from "./pizzaFlavors";

interface PizzaVegetarian extends Pizza {
    flavor: Vegetarian
}

export default PizzaVegetarian;