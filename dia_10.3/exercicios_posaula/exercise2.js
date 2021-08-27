const fn1 = (string) => {
  return string.toUpperCase();
}

const fn2 = (string) => {
  return string[0];
}

const fn3 = (string1, string2) => {
  return string1.concat(string2);
}

module.exports = {
  fn1,
  fn2,
  fn3,
}