import { exit } from "process";
import readline from "readline-sync";
// import Months from "./Months";
// import Seasons from "./Seasons";

// const monthsNames = Object.values(Months);


// const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");
// // O método .keyInSelect mostra uma interface
// // de escolha para a pessoa usuária

// const seasonsSouth = {
//   [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
//   [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
//   [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
//   [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
// }

// // Criamos um objeto onde suas chaves são as estações
// // e seus valores são os meses. Note abaixo um segundo
// // objeto onde, sendo do hemisfério oposto, as estações
// // são opostas também

// const seasonsNorth = {
//   [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
//   [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
//   [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
//   [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
// }

// const hemispheres = {
//   "Norte": seasonsNorth,
//   "Sul": seasonsSouth
// }

// const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// // O método .keyInSelect mostra uma interface
// // de escolha para a pessoa usuária

// const month = Object.values(Months)[choiceMonth];

// const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

// console.log(`Mês: \n${month}`);
// console.log(`Hemisfério: \n${hemisphere}`);
// console.log(`Estações:`);
// const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
// Object.entries(chosenHemisphereSeasons).map((entry) => {
//     const seasons = entry[0];
//     const months = entry[1];
//     // São os meses de cada estação. Caso esteja
//     // incluído em mais de uma estação, o console
//     // abaixo irá adicionar

//     if (months.includes(month)) console.log(seasons);
// });


// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
  { name: "Converter comprimento", script: "./length" },
  { name: "Converter massa", script: "./mass" },
  { name: "Converter capacidade", script: "./capacity" },
  { name: "Converter área", script: "./area" },
  { name: "Converter volume", script: "./volume" }
];

// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);

// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script); // executamos o script escolhido usando o require