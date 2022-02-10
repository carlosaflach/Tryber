const readline = require('readline-sync');

const scripts = [
  { name: "Calculate IMC", script: './imc.js'},
  { name: "Calculate Speed Average", script: './velocidade.js'},
  { name: "Guessing Game", script: './sorteio.js'}
]

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift(`Escolha um número para executar o script correspondente:
`);

// Adicionamos uma linha a mais no final.
mensagem.push(" ")

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);