// ./area.ts

import utils from "./utils";

const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convert(value: number, forUnity: string, toUnity: string): number {

  return utils.convert(units, value, forUnity, toUnity);
}