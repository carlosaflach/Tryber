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

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  // readAll();
  // await getSimpsonById(1);
  // getFilteredSimpsons();
  // familySimpson();
  addNelsonToFamily();
}

main();