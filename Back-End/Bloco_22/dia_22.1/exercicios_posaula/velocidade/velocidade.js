const readline = require('readline-sync');

const velocidade = (distancia, tempo) => {
  const velo = distancia / tempo;
  return console.log(`A velocidade é de ${velo} m/s. `);
}

const main = () => {
  const distancia = readline.questionInt('Insira a distância em metros: ');
  const tempo = readline.questionInt('Insira o tempo em segundos: ');

  velocidade(distancia, tempo);
}

main();