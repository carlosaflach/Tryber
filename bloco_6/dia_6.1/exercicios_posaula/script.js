function createStateOptions() {

  let stateOptions = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

  const selectStates = document.getElementById('estado'); // Busca pelo elemento html com o id estado.

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOption = document.createElement('option');   // para cada iteração cria um elemento option
    selectStates.appendChild(createOption).innerHTML = stateOptions[index]; // para cada iteração adciona o texto da option como o stateOptions[index]
    selectStates.appendChild(createOption).value = stateOptions[index]; // para cada iteração adiciona o valor da option como stateOptions[index]
  } 
}

function validateName () {
  let name = document.querySelector('[name=nome]');

  // Verifica maxLength e required
  if(name.value.length > 40 || name.value.length === 0) {
    alert('O nome é invalido');
  } 
}

function validateEmail() {
  // verifica maxLenght, required e formato email.
  let email = document.querySelector('#email');
  if(email.value.length > 50 || email.value.length === 0 ) {
    alert("Email Inválido.")
  } else if (email.value.includes('@')) {
    alert('Email Válido');
  } else {
    alert('Email Inválido');
  }
}

function validateCpf () {
  // verifica maxLength, required.
  let cpf = document.querySelector('#cpf');
  
  if (cpf.value.length > 11 || cpf.value.length === 0) {
    alert('CPF Inválido.');
  } else {
    alert('Email Válido');
  }
}

function validateAdress () {
  let adress = document.querySelector('#adress');
  if (adress.value.length > 200 || adress.value.length === 0) {
    alert('Endereço Errado');
  }
}

function handleSubmit (event) {
  event.preventDefault();
  validateName();
  validateEmail();
  validateCpf();
  validateAdress();
}

window.onload = function () {
  createStateOptions();
  let button = document.querySelector(".submit-button");
  button.addEventListener('click', handleSubmit);
}


