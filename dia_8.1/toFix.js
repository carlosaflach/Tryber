const goodMorning = () => console.log(`Acordando`);

const coffeTime = () => console.log(`Bora tomar café!!`);

const sleepTime = () => console.log(`Partiu dormir!!`);

const doingThings = (func) => func(func);

doingThings(goodMorning);
doingThings(coffeTime);
doingThings(sleepTime);

