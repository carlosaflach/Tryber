const express = require('express');
const bodyparser = require('body-parser');

const router = require('./routes/routes');

const app = express();

app.use(bodyparser.json());

app.use('/sales', router);

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });