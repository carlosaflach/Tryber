function createStateOptions() {

  let stateOptions = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

  const selectStates = document.getElementById('estado'); // Busca pelo elemento html com o id estado.

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOption = document.createElement('option');   // para cada iteração cria um elemento option
    selectStates.appendChild(createOption).innerHTML = stateOptions[index]; // para cada iteração adciona o texto da option como o stateOptions[index]
    selectStates.appendChild(createOption).value = stateOptions[index]; // para cada iteração adiciona o valor da option como stateOptions[index]
  }
}

function validateName() {
  let name = document.querySelector('[name=nome]');

  // Verifica maxLength e required
  if (name.value.length > 40 || name.value.length === 0) {
    alert('O nome é invalido');
  }
}

function validateEmail() {
  // verifica maxLenght, required e formato email.
  let email = document.querySelector('#email');
  if (email.value.length > 50 || email.value.length === 0) {
    alert("Email Inválido.")
  } else if (email.value.includes('@')) {
    alert('Email Válido');
  } else {
    alert('Email Inválido');
  }
}

function validateCpf() {
  // verifica maxLength, required.
  let cpf = document.querySelector('#cpf');

  if (cpf.value.length > 11 || cpf.value.length === 0) {
    alert('CPF Inválido.');
  } else {
    alert('Email Válido');
  }
}

function validateAdress() {
  let adress = document.querySelector('#adress');
  if (adress.value.length > 200 || adress.value.length === 0) {
    alert('Endereço Errado');
  }
}

function handleSubmit(event) {
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

// var picker = new Pikaday({
//   field: document.getElementById('datepicker'),
//   format: 'D/M/YYYY',
//   toString(date, format) {
//     // you should do formatting based on the passed format,
//     // but we will just return 'D/M/YYYY' for simplicity
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   },
//   parse(dateString, format) {
//     // dateString is the result of `toString` method
//     const parts = dateString.split('/');
//     const day = parseInt(parts[0], 10);
//     const month = parseInt(parts[1], 10) - 1;
//     const year = parseInt(parts[2], 10);
//     return new Date(year, month, day);
//   }
// });

// new JustValidate('.js-form', {
//   rules: {
//     name: {
//       required: true,
//       minLength: 3,
//       maxLength:40
//     },
//     email: {
//       required: true,
//       email: true,
//       maxLength: 50
//     },
//     cpf: {
//       required: true,
//       maxLength: 11
//     },
//     adress: {
//       required: true,
//       maxLength: 200
//     },
//     city: {
//       required: true,
//       maxLength: 28
//     },
//     state: {
//       required: true,
//     },
//     radio: {
//       required: true,
//       maxLength: 200,
//     },
//     text: {
//       require: true,
//       maxLength: 1000
//     },
//     cargo: {
//       required:true,
//       maxLength: 40
//     },
//     descricao: {
//       required: true,
//       maxLength: 500
//     },
//     date: {
//       required:true,
//     },
//     messages: {
//       name: {
//         required: 'O campo de nome é obrigatório.',
//         maxLength: 'O limite é de 40 caracteres.'
//       },
//       email: {
//         required: 'O campo de email é obrigatório.',
//         email: 'O email digitado não é válido.',
//         maxLength: 'O limite é de 50 caracteres.'
//       },
//       cpf: {
//         required: 'O campo de CPF é obrigatório.',
//         maxLength: 'O limite é de 11 caracteres.'
//       },
//       address: {
//         required: 'O campo endereço é obrigatório.',
//         maxLength: 'O limite é de 200 caracteres.'
//       },
//       city: {
//         required: 'O campo cidade é obrigatório.',
//         maxLength: 'O limite é de 28 caracteres.'
//       },
//       state: {
//         required: 'O campo estado é obrigatório.',
//       },
//       radio: {
//         required: 'A escolha de um item é obrigatória.',
//       },
//       text: {
//         required: 'Este campo é obrigatório.',
//         maxLength: 'O limite é de 1000 caracteres.'
//       },
//       cargo: {
//         required: 'Este campo é obrigatório.',
//         maxLength: 'O limite é de 40 caracteres.'
//       },
//       descricao: {
//         required: 'Este campo é obrigatório.',
//         maxLength: 'O limite é de 500 caracteres.'
//       },
//       date: {
//         required: 'Este campo é obrigatório.',
//       }
//     },
//     submitHandler: function (form, values) {
//       console.log(form, values);
//     }}});