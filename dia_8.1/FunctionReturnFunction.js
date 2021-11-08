const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(16)
console.log(initialSum(6));