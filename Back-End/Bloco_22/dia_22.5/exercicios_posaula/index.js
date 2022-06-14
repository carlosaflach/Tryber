const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

app.post('/sales', (req, res) => {
  const { productName, infos } = req.body;

  res.status(200).json({})
});


app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });