// ./PizzaCommon.ts

import Pizza from "./pizza";
import { Common } from "./pizzaFlavors";

interface PizzaCommon extends Pizza {
    flavor: Common
}

export default PizzaCommon;