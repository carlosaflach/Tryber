function createStateOptions() {

  let stateOptions = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

  const selectStates = document.getElementById('estado'); // Busca pelo elemento html com o id estado.

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOption = document.createElement('option');   // para cada iteração cria um elemento option
    selectStates.appendChild(createOption).innerHTML = stateOptions[index]; // para cada iteração adciona o texto da option como o stateOptions[index]
    selectStates.appendChild(createOption).value = stateOptions[index]; // para cada iteração adiciona o valor da option como stateOptions[index]
  } 
}

window.onload = function () {
  createStateOptions();
}


function verificaData() {
  const dia = document.getElementById('dia');
  const mes = document.getElementById('mes');
  const ano = document.getElementById('ano');
 
  if (dia.value < 0 | dia.value > 31) {
    alert('O valor informado para o dia está errado.');
  }
  if (mes.value < 0 | mes.value > 12 ){
    alert('O valor informado para o ano está errado');
  }
  if (ano.value < 0) {
    alert('O ano não pode ser negativo.');
  }
}

dia.addEventListener('keyup', verificaData);
mes.addEventListener('keyup', verificaData);
ano.addEventListener('keyup', verificaData);


const botao = document.getElementById('envia-button');

function prevenir (event) {
  event.preventDefault();
}

botao.addEventListener('click', prevenir);