const express = require('express');
const router = express.Router();


const validateUsername = require('../middlewares/validateUsername');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword.js');
const gerenateRandomToken = require('../helpers/createToken');


router.post('/login',validateEmail, validatePassword, (req, res) => {
  const token = gerenateRandomToken;
  return res.status(200).json({ token: token });
});


router.use(validateUsername, validateEmail, validatePassword);

router.post('/register', (req, res) => {
  return res.status(200).json({ message: 'Usuário cadastrado com sucesso'});
});



module.exports = router;