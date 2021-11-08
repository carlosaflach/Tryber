import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFieldset extends Component {
  render() {
    const { anecdoteValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Texto e arquivos</legend>
        <label htmlFor="anecdote">
          Anedota:
          <textarea
            id="anecdote"
            name="anecdote"
            onChange={ handleChange }
            value={ anecdoteValue }
          />
          { !anecdoteValue.length ? ' -campo vazio- ' : ' -ok- '}
        </label>
        <input type="file" />
      </fieldset>
    );
  }
}

DataFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  anecdoteValue: PropTypes.string.isRequired,
};

export default DataFieldset;