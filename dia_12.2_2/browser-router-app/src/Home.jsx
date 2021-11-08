import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/about"> About </Link>
          <Link to="/howto"> HowTo </Link>
          <Link to="/profile"> Profile </Link>
        </nav>

        <h1>Página Home</h1>
        {/* Quando utilizamos o route dentro de uma pagina, o conteúdo daquela pagina sempre será exibido, mesmo que seja trocado a rota. */}
        {/* <Route path='/about' component={ About } />
        <Route path='/howto' component={ Howto } />
        <Route path='/profile' component={ Profile } /> */}
      </div>
    )
  }
}
