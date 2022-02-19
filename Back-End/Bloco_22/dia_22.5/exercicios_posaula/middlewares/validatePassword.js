const validatePassword = (req, res, next) => {
  const{ password } = req.body;
  if(!password) return res.status(400).json({ message: 'Password é obrigatorio'});
  if(password.length < 4 || password.length > 8 ) return res.status(400).json({ message: "Password deve ter no mínimo 4 characteres e no máximo 8"});
  next();
};

module.exports = validatePassword;