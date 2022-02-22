const express = require('express');
const bodyParse = require('body-parser');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParse.json());


// Dizemos para o express que toda requisição enviada para `POST /user` deve ser tratada pelo middleware `createUser`
app.post('/user', middlewares.createUser);

app.use(middlewares.error);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});