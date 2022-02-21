const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const errors = require('./middlewares/routerNotFound');
const btcRouter = require('./routes/btcRouter');


const app = express();

app.use(bodyParser.json());

app.use('/btc', btcRouter) 

app.use('/user', router);

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(3000, () => {
  console.log("Aplicação ouvindo na porta 3000");
})