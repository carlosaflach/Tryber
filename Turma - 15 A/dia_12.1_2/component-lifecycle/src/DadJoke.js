import React from 'react'

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  // Uma maneira de fazer
  fetchJoke() {
    this.setState(
      {loading: true,}, // primeiro parâmetro da setState
      // segundo parâmetro do setState.
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }  // porque??
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
    })
    })
  }

 
  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Salvando a piada no array de piadas existentes
    this.setState(( {storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
    this.fetchJoke();
  }

  /* this.setState(( {storedJokes, jokeObj }) => ({
    storedJokes: [...storedJokes, jokeObj],
  }));

  Utilizamos isso por causa dessa situação
  suponha que:
  storedJokes = ['a', 'b']
  e
  jokeObj = 'c'
  E fizemos o ...
  estamos de fato fazendo o seguinte
  ===> ['a', 'b', 'c']
  */

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <p> { loading ? loadingElement : this.renderJokeElement() } </p> 
      {/* Aqui ele vai fazer a validação, se a piada existe ? se existir vai renderizar ela, caso contrário vai carregar o loading element. Esse condicional é interessante para casos de requisição de API's pois quando  é feito a requisição, primeiramente é feito a montagem da página, e somente acessa a API no componentDidMount, logo, somente irá renderizar a piada após a requisição. */}

      </div>
    );
  }
}

export default DadJoke;