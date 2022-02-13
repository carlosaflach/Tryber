const verifyNumberSignal = (num) => {
  if (num > 0) {
    return "It's positive!";
  } else if (num < 0) {
    return "It's negative!";
  } else {
    return "It's neutral";
  }
}