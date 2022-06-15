const express = require('express');
const auth = require('../middlewares/auth');
const { validateName, validateInfos } = require('../middlewares/validations');

const router = express.Router();

router.post('/', auth, validateName, validateInfos, (req, res) => {
  const { producName, infos } = req.body;

  res.status(201).json({ message: "Venda cadastrada com sucesso."});
});




module.exports = router;