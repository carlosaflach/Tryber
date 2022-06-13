const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Ex01
app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

// Ex02
app.post('/hello', (req, res) => {
  const { name, age } = req.body;

  if(age > 17) return res.status(200).json({ message: `Hello, ${name}`});

  res.status(401).json({ message: "Unauthorized" });
  
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));