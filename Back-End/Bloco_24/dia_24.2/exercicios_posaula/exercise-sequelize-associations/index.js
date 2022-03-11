const bodyParser = require('body-parser');

const express = require('express');

const { getAllPatientsPlans, getAllPatientsSurgeries } = require('./Controllers/patientsController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', getAllPatientsPlans);
app.get('/patients/surgeries', getAllPatientsSurgeries);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});