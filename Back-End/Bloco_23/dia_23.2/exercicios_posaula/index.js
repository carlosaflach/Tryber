const express = require('express');
const bodyParser = require('body-parser');

const ping = require('./controllers/pingController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);

// app.get('/cep/:cep');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
})
