// Estrutura básica aplicação express.
const express = require('express');

const app = express(); // 1 - Inicializa a aplicação Express

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3 - Fazendo o Bind. passando a porta 3001 do localhost e deixar disponível para ser a URL da nossa aplicação.

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}