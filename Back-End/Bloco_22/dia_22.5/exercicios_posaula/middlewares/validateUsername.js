const validateUsername = (req, res, next) => {
    const{ username } = req.body;
    if(!username) return res.status(400).json({ message: 'Username é obrigatorio'});
    if(username.length <= 3) return res.status(400).json({ message: "Username tem que ter mais de 3 characteres"});

    next();
};

module.exports = validateUsername;