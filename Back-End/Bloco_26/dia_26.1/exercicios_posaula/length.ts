// ./length.ts

import utils from "./utils";

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, forUnity: string, toUnity: string): number {

    return utils.convert(units, value, forUnity, toUnity);
}