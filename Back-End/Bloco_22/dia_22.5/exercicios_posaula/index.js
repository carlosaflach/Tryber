const express = require('express');
const bodyparser = require('body-parser');

const salesRouter = require('./routes/salesRouter');
const signupRouter = require('./routes/signupRouter');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyparser.json());

app.use('/sales', salesRouter);
app.use('/signup', signupRouter);

app.use(errorMiddleware);

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });