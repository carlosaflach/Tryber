const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (req, res, next) => {
  return res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res, next) => {
  const { name } = req.body;
  if(!name) return res.status(404).json({ message: 'O parâmetro "name" é obrigatório'});

  return res.status(200).json({ message: `Hello, ${name}` });
})

app.post('/greetings', (req, res, next) => {
  const { name, age } = req.body;
  if(!name) return res.status(404).json({ message: 'O parâmetro "name" é obrigatório'});
  if(!age) return res.status(404).json({ message: 'O parâmetro "age" é obrigatório'});

  if( age <= 17) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json({ message: `Hello, ${name}` });
});

app.put('/users/:name/:age', (req, res, next) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de iade`});
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3000');
})