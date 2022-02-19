const express = require('express');
const router = express.Router();

const validateUsername = require('../middlewares/validateUsername');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword.js');

router.use(validateUsername, validateEmail, validatePassword);

router.post('/register');

module.exports = router;