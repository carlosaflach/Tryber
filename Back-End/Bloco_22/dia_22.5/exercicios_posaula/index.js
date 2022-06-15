const express = require('express');
const bodyparser = require('body-parser');

const router = require('./routes/routes');
const errorMiddleware = require('./middlewares/error.js');

const app = express();

app.use(bodyparser.json());

app.use('/sales', router);

app.use(errorMiddleware);

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });