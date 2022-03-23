// ./mass.ts

import utils from "./utils";

const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert(value: number, forUnity: string, toUnity: string): number {

    return utils.convert(units, value, forUnity, toUnity);
}