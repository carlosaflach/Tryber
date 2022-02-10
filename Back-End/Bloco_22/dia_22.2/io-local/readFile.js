// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// Módulo readFile com Callbacks => MENOS RECOMENDADO

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

// Módulo readFile com Promises => Mais recomendado!!
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });