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

async function getFilteredSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = await JSON.parse(fileContent);

  const filteredSimpsons = simpsons.filter((simpson) => Number(simpson.id) !== 10  && Number(simpson.id) !== 6);

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));

}

// d

async function familySimpson() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = await JSON.parse(fileContent);

  const newArrayofSimpsons = simpsons.filter((simpson) => Number(simpson.id) <= 4);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArrayofSimpsons));
}

// e

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

// f
async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const Maggie = [{ id: '15', name: 'Maggie Simpson' }]
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat(Maggie);
  // com spread seria assim: 

  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithMaggie));
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  // readAll();
  // await getSimpsonById(1);
  // getFilteredSimpsons();
  // familySimpson();
  // addNelsonToFamily();
  replaceNelson();
}

main();