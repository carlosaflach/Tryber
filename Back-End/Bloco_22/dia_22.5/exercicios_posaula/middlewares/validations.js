const validateName = (req, res, next) => {
  try {
    const { productName } = req.body;
    
   if(!productName) {
     const err = new Error("O campo productName é obrigatório");
     err.statusCode = 400;
     return next(err);
   }
   if(productName.length <= 4) {
    const err = new Error("O campo productName deve ter pelo menos 4 caracteres");
    err.statusCode = 400;
    return next(err);
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

const validateSaledate = (saleDate) => (req, res, next) => {
  
};




const validateInfos = (req, res, next) => {
  try {
    const { infos } = req.body;
    
    if(!infos) {
      const err = new Error("O campo infos é obrigatório" );
      err.statusCode = 400;
      return next(err);
    }

    if(!infos.saleDate) {
      const err = new Error("O campo saleDate é obrigatório");
      err.statusCode = 400;
      return next(err);
    }

    if(infos.warrantyPeriod === undefined) {
      const err = new Error("O campo warrantyPeriod é obrigatório");
      err.statusCode = 400;
      return next(err);
    }
  
    const { saleDate, warrantyPeriod } = infos;

    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    if (!dateRegex.test(saleDate)) {
      const err = new Error("O campo saleDate não é uma data válida");
      err.statusCode = 400;
      return next(err);
    }

  
    if(warrantyPeriod === 0 || warrantyPeriod > 3) {
      const err = new Error("O campo warrantyPeriod precisa estar entre 1 e 3");
      err.statusCode = 400;
      return next(err);
    }
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