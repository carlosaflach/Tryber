const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  // Criamos uma variável readlineInterface para inicializar
  // a interface de comunicação do módulo readline, conforme visto na documentação
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    // No entanto, abriremos a `question` dentro de uma promise
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

async function start() {
  // Como nossa função `question` retorna uma Promise,
  // podemos utilzar `await` para obter a resposta.
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    // Tentamos realizar a leitura do arquivo
    const fileContent = await fs.readFile(fileName, 'utf-8');
    // E exibir seu resultado na tela
    console.log(fileContent);
  } catch (err) {
    // Caso um erro aconteça, exibimos a mensagem de erro na tela.
    console.log('Arquivo inexistente');
  }
}

start();