const bodyParser = require('body-parser');

const express = require('express');

const { getAllPatientsPlans } = require('./Controllers/patientsController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', getAllPatientsPlans);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});