const express = require('express');
const bodyParser = require('body-parser');

const ping = require('./controllers/pingController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
})
