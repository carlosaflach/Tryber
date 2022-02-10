const fs = require('fs').promises;


const getSimpsonId = async () => {
  const simpsonRaw = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonJson = await JSON.parse(simpsonRaw);
  
  simpsonJson.map(({ id, name }) => console.log(`${id} - ${name}`))
}

getSimpsonId()