const ping = (req, res) => {
  const message = { message: "pong!"};
  res.status(200).json(message);
};

module.exports = ping;