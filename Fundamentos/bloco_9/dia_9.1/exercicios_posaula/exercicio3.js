const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

setTimeout(() => getPlanet(),4000); // imprime Marte depois de 4 segundos

// Ao chamar a função setTimeout, tem que passar uma callback function, nesse caso é arrow function, e a callback é getPanet()