const fs = require('fs').promises

const escrevaArquivo = async (fileName, fileContent) => {
  await fs.writeFile(fileName,fileContent);
  return 'ok';
}; 


module.exports = escrevaArquivo;