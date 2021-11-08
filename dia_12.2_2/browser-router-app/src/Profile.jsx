import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <p> Carlos Afonso, {this.props.name} </p>
        <Link to='/'> Voltar a Home </Link>
      </div>
    )
  }
}
