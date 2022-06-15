const express = require('express');
const generateToken = require('../utils/crypto');

const router = express.Router();

router.post("/", (req, res, next) => {

  try {
    const { email, password, firstName, phone } = req.body;
    
    if(!email || !password || !firstName || !phone) {
      const err = new Error('missing fields');
      err.statusCode = 401;
      return next(err);
    }
    const token = generateToken();
    res.status(200).json({ token: `${token}`});

  } catch (err) {
    console.log(err);
    next(err);
  }
});


module.exports = router;