import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <p>Aqui é minha página about</p>
        <Link to='/'> Voltar a Home </Link>
      </div>
    )
  }
}
