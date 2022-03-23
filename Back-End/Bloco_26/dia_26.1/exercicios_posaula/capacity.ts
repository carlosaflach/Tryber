// ./capacity.ts

import utils from "./utils";

const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convert(value: number, forUnity: string, toUnity: string): number {

    return utils.convert(units, value, forUnity, toUnity);
}