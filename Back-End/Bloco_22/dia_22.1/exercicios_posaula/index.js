const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `path` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', path: './imc/imc.js' },
  { name: 'Calcular velocidade média', path: './velocidae/velocidade.js' },
  { name: 'Jogo de adivinhação', path: './sorteio/sorteio.js' },
];

function escolherScript() {
  // Iteramos sobre os scripts para criar a lista numerada
  const enunciado = 'Escolha um número para executar o script correspondente\n';
  const mensagem = scripts
    .reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado);

  const numeroEscolhido = readline.questionInt(mensagem) - 1;

  const script = scripts[numeroEscolhido];

  return script;
}

function main() {
  const script = escolherScript();

  if (!script) return console.log('Número inválido. Saindo');

  // Chamamos o script selecionado
  // Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
  // No entanto, para fins didáticos, o `require` nos atende por enquanto
  
  // Caso esteja usando o nosso padrão de ESLint será necessário desabilitar as regras abaixo
  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(script.path);
}

main();