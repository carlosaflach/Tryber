const express = require('express');
const router = express.Router();
const axios = require('axios');

const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const validateUsername = require('../middlewares/validateUsername');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword.js');
const gerenateRandomToken = require('../helpers/createToken');
const { isValidToken } = require('../middlewares/validateToken');

router.post('/login',validateEmail, validatePassword, (req, res) => {
  const token = gerenateRandomToken;
  return res.status(200).json({ token: token });
});


router.get('/price', isValidToken, async (_req, res) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);

  res.status(200).json(result.data);
});


router.use(validateUsername, validateEmail, validatePassword);

router.post('/register', (req, res) => {
  return res.status(200).json({ message: 'Usuário cadastrado com sucesso'});
});



module.exports = router;