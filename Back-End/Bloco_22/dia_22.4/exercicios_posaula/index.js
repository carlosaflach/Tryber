const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (req, res, next) => {
  return res.status(200).json({ message: 'pong'});
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3000');
})