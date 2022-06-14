const validateName = (req, res, next) => {
  try {
    const { productName } = req.body;
    
    if(!productName || productName.length <=4 ){
      const error = new Error('productName é obrigatório e deve ter mais de 4 caracteres');
      error.statusCode = 400;
      return next(err);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}