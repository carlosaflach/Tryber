const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');


const app = express();

app.use(bodyParser.json());

app.use('/btc', router) 

app.use('/user', router);

app.listen(3000, () => {
  console.log("Aplicação ouvindo na porta 3000");
})