const validateName = (req, res, next) => {
  try {
    const { productName } = req.body;
    
   if(!productName) {
     const error = new Error("O campo productName é obrigatório");
     error.statusCode = 400;
     return next(err);
   }
   if(productName.length <= 4) {
    const error = new Error("O campo productName deve ter pelo menos 4 caracteres");
    error.statusCode = 400;
   }

   next();

  } catch (err) {
    console.log(err);
    next(err);
  }
}

const testDate = (date) => {
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!(date_regex.test(date))) {
    return false; 
  }
  return true;
}

const validateSaledate = (saleDate) => {
  if(!saleDate) {
    const error = new Error("O campo saleDate é obrigatório" );
    error.statusCode = 400;
    return next(err);
  }

  if(testDate(saleDate) === false) {
    const error = new Error("O campo saleDate não é uma data válida");
    error.statusCode = 400;
    return next(err);
  }
};

const validateWarranty = (warrantyPeriod) => {
  if(!warrantyPeriod) {
    const error = new Error("O campo warrantyPeriod é obrigatório");
    error.statusCode = 400;
    return next(err);
  }

  if(warrantyPeriod < 1 || warrantyPeriod > 3) {
    const error = new Error("O campo warrantyPeriod precisa estar entre 1 e 3");
    error.statusCode = 400;
    return next(err);
  }
};


const validateInfos = (req, res, next) => {
  try {
    const { infos } = req.body;
    const { saleDate, warrantyPeriod } = infos;
    
    if(!infos) {
      const error = new Error("O campo infos é obrigatório" );
      error.statusCode = 400;
      return next(err);
    }
    validateSaledate(saleDate);

    validateWarranty(warrantyPeriod);
    next();
  } catch (err) {
    console.log(err);
    next(err); 
  }
}

module.exports =  {
  validateName,
  validateInfos,
}