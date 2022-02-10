const readline = require('readline-sync');


const speedAverage = () =>  {
  const distance = readline.questionFloat(`What is the distance in meters?
  `);
  const time = readline.questionFloat(`How long to complete the route in seconds?
  `)
  const avg = distance / time;
  return console.log(`The speed average is ${avg} m/s`);
}

speedAverage();