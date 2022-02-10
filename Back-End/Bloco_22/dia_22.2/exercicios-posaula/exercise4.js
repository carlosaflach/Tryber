const fs = require('fs').promises;

// 1
const getSimpsonId = async () => {
  const simpsonRaw = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonJson = await JSON.parse(simpsonRaw);
  
  simpsonJson.map(({ id, name }) => console.log(`${id} - ${name}`))
}

// getSimpsonId()

// 2 

const getSimpsonById = async (id) => {
  const simpsonRaw = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonJson = await JSON.parse(simpsonRaw);
  
  const chosenSimpson = simpsonJson.find((simpson) => simpson.id === id.toString())

  if(!chosenSimpson) {
    throw new Error('id não encontrado')
  }

  return console.log(chosenSimpson); 
}

getSimpsonById(1)

const removeSimpson = async () => {
  const simpsonRaw = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonJson = await JSON.parse(simpsonRaw);
  
  const filteredArray = simpsonJson.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredArray));
}

removeSimpson()