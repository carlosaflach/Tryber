const fs = require("fs").promises;
const readline = require("readline");

function question(message) {
  // Criamos uma variável readlineInterface para inicializar
  // a interface de comunicação do módulo readline, conforme visto na documentação
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
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
  const fileName = await question("Arquivo a ser lido: ");

  const originalContent = await fs
    .readFile(fileName, "utf-8")
    // Caso aconteça um erro ao ler o arquivo
    .catch((err) => {
      // Mostramos o erro na tela
      console.error(`Erro ao ler o arquivo: ${err}`);
      // E retornamos `false`.
      // O valor retornado aqui do catch é o valor que será armazenado
      // na variável `originalContent`.
      return false;
    });

  // Se `originalContent` estiver vazia ou contiver um valor falso,
  // quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
  // Utilizamos o `return` para encerrar a execução
  if (!originalContent) return;

  const oldWord = await question("Qual palavra deseja substituir? ");
  const newWord = await question("E qual palavra deve ficar em seu lugar? ");

  const newContent = originalContent.replace(new RegExp(oldWord, "g"), newWord);

  console.log("Resultado da substituição: ");
  console.log(newContent);

  const destinationPath = await question("Onde deseja salvar o resultado? ");
  await fs.writeFile(destinationPath, newContent);
}

start();
