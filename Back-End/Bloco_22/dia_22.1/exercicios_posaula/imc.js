const imc = (height, weight) => {
  return (weight / Math.pow(height, 2)).toFixed(2);
};

console.log(imc(1.73, 80));
// module.export = imc;