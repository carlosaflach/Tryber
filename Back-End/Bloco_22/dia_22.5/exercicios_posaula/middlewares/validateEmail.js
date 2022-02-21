
const isValidEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


const validateEmail = (req, res, next) => {
  const{ email } = req.body;
  if(!email) return res.status(400).json({ message: 'Email é obrigatorio'});
  if(!isValidEmail(email)) return res.status(400).json({ message: "Email deve ser no formato email@email.com"});
  next();
};

module.exports = validateEmail;