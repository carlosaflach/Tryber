const encode = (string) => {
  let str = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      str += 1;
    } else if (string[index] === 'e') {
      str += 2;
    } else if (string[index] === 'i') {
      str += 3;
    } else if (string[index] === 'o') {
      str += 4;
    } else if (string[index] === 'u') {
      str += 5;
    } else {
      str += string[index];
    }
  }
  return str;
}
console.log(encode('hi there!'))

const decode = (string) => {
  let str = '';
  for (let index in string) {
    if (string[index] === '1') {
      str += 'a';
    } else if (string[index] === '2') {
      str += 'e';
    } else if (string[index] === '3') {
      str += 'i';
    } else if (string[index] === '4') {
      str += 'o';
    } else if (string[index] === '5') {
      str += 'u';
    } else {
      str += string[index];
    }
  }
  return str;
}
console.log(decode('h2ll4'));

module.exports = {
  encode,
  decode, 
}