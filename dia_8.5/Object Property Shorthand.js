// Sem usar o object property shorthand.
// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude});

// Usando o Object Property Shorthand.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));