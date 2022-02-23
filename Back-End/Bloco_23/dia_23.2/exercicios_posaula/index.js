require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/error.js');

const ping = require('./controllers/pingController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);

app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
})
