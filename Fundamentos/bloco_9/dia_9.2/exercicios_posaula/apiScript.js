// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/'; // Declarando variável com a url da API.

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject) // Aqui eu passo os parâmetros para a função: a url, armazenada na variável, e o objeto do tipo json.
  .then(response => response.json())
  .then(data => {
    document.getElementById('jokeContainer').innerText = data.joke
  });
};

window.onload = () => fetchJoke();