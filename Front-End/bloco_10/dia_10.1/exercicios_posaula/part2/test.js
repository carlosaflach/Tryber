// encodeDecode.js
function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = splitString.map((character) => {
    if (objectMap[character]) {
      return objectMap[character];
    }
    return character;
  });
  return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
console.log(encode('hi there!'))

function decode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
