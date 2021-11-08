import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalFieldset extends Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Informações pessoais</legend>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            onChange={ handleChange }
            value={ nameValue }
          />
          { !nameValue.length ? ' -nome inválido- ' : ' -ok- '}
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={ handleChange }
            value={ emailValue }
          />
          { !emailValue.match(/^\S+@\S+$/i)
            ? ' -email inválido- ' : ' -ok- ' }
        </label>

        <label htmlFor="age">
          Idade:
          <select
            id="age"
            name="age"
            onChange={ handleChange }
            value={ ageValue }
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
          { !ageValue.length ? ' -idade inválida- ' : ' -ok- '}
        </label>

      </fieldset>
    );
  }
}

PersonalFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
};

export default PersonalFieldset;