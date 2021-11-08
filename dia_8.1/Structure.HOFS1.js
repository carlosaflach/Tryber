const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (num) => {
  if (num % 2 === 0) {
    console.log(num, 'is even');
  }
};

const isOdd = (num1) => {
  if ((num1 % 2) > 0) {
    console.log(num1, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;