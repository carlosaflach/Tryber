const fs = require('fs').promises;

// a
async function readAll() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsonsParse = await JSON.parse(simpsonsJson);

  const strings = simpsonsParse.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

// b
async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = await JSON.parse(fileContent);

  const findSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if(!findSimpson) {
    throw new Error('id não encontrado')
  }

  return console.log(findSimpson);
}

// c

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  readAll();
  await getSimpsonById(1);

}

main();