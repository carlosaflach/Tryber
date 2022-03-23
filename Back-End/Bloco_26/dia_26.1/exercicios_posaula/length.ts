// criamos um array de strings com as unidades de medida
// o tipo inferido pelo TypeScript será "string[]", essa é a sintaxe para tipar um array
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function makeError(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

const convert = (value: number, baseUnit: string, conversionUnit: string) => {
  if (!units.includes(baseUnit)) makeError(baseUnit); // se a unidade base não for válida lançamos um erro
  if (!units.includes(conversionUnit)) makeError(conversionUnit); // se a unidade para a conversão não for válida lançamos um erro

  const forIndex = units.indexOf(baseUnit); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(conversionUnit); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent)
};

console.log(convert(1, 'km', 'cm'));