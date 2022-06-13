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
// a)
app.get('/simpsons', async (req, res) => {
   try {
     const simpsons = await simpsonsUtils.getSimpsons();

     return res.status(200).json(simpsons);
   } catch (error) {
     return res.status(500).end();
   }
});

// c
app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.some((character) => character.id === id)) {
      // não esqueça de adicionar o return para impedir de que seu código continue.
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
});

// b)

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpsonIndex = simpsons.findIndex((s) => s.id === id);

    if(simpsonIndex < 0) return res.status(404).json({ message: 'simpson not found' });

    return res.status(202).json(simpsons[simpsonIndex]);

  } catch (error) {
    return res.status(500).end();
  }
});


app.listen(3000, () => console.log('ouvindo na porta 3000!'));