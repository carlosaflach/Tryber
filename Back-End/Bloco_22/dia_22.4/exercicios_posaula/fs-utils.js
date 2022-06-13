const fs = require('fs/promises');

const getSimpsons = async () => {
  const simpsonsRaw = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsJson = JSON.parse(simpsonsRaw);
  return simpsonsJson;
};


module.exports = {
  getSimpsons
};