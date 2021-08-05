const goodMorning = () => console.log(`Good Morning`);
const coffeTime = () => console.log(`Bora tomar café!!`);
const sleepTime = () => console.log(`Partiu dormir!!`);

const doingThings = (func) => func();

doingThings(goodMorning);
doingThings(coffeTime);
doingThings(sleepTime);