import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Howto extends Component {
  render() {
    return (
      <div>
        <p>Como navegar nos mares na internet.</p>
        <Link to='/'> Voltar a Home </Link>
      </div>
    )
  }
}
