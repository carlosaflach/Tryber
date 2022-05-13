const express = require('express');
const btcRouter = express.Router();

const axios = require('axios');

const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const { isValidToken } = require('../middlewares/validateToken');

btcRouter.get('/price', isValidToken, async (_req, res) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);

  res.status(200).json(result.data);
});


module.exports = btcRouter;