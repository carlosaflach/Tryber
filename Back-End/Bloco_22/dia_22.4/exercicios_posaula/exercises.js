const express = require('express');
const bodyParser = require('body-parser');

const simpsonsUtils = require('./fs-utils');


const app = express();

app.use(bodyParser.json());

// Ex01
app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

// Ex02
app.post('/hello', (req, res) => {
  const { name } = req.body;

  return res.status(200).json({ message: `Hello, ${name}`});
});

// Ex03

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(age > 17) return res.status(200).json({ message: `Hello, ${name}`});

  res.status(401).json({ message: "Unauthorized" });
});

// Ex04

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.`});
})

// Ex05

app.get('/simpsons', async (req, res) => {
   try {
     const simpsons = await simpsonsUtils.getSimpsons();

     return res.status(200).json(simpsons);
   } catch (error) {
     return res.status(500).end();
   }
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));