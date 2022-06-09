const fs = require('fs').promises;

async function readAll() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsonsParse = await JSON.parse(simpsonsJson);

  const strings = simpsonsParse.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
function main() {
  readAll();
}

main();