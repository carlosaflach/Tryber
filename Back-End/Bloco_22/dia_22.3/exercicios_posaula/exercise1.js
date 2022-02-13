const verifyNumberSignal = (num) => {
  if (typeof num !== 'number') {
    return "The insert value it's not a number. Please insert a number."
  } else if (num > 0) {
    return "It's positive!";
  } else if (num < 0) {
    return "It's negative!";
  } else {
    return "It's neutral";
  }
}

module.exports = verifyNumberSignal;