const { readName, readAge, readHeight, readWeight } = require('./readfile');

const name = readName();
const age = readAge();
const height = readHeight();
const weight = readWeight();

const imc = (height, weight) => {
  return (weight / Math.pow(height, 2)).toFixed(2);
};

const printImc = () => {
  if(imc(height, weight) < 18.5)  {
    console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}, you're underweight`);
    return;
  } else if(imc(height, weight) >= 18.5 && imc(height, weight) <= 24.9 ) {
    console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}, you're with ideal weight`);
    return;
  } else if(imc(height, weight) >= 25 && imc(height, weight) <= 29.9 ) {
    console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}, you're overweight`);
    return;
  }  else if(imc(height, weight) >= 30 && imc(height, weight) <= 34.9 ) {
    console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}, you're with grade I obesity`);
    return;
  } else if(imc(height, weight) >= 35 && imc(height, weight) <= 39 ) {
    console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}, you're with grade II obesity`);
    return;
  } else {
    console.log(`Hello ${name}, you are ${age} years old, and your IMC is ${imc(height, weight)}, you're with grade III obesity`);
  }
  
}

printImc();


module.exports = imc;