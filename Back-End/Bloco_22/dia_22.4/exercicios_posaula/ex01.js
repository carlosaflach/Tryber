const express = require('express');

const app = express();


app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong'});
})


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3