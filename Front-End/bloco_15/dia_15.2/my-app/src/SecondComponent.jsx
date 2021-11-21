import React from 'react';
import { connect } from 'react-redux';
import { newAction } from './actions';
// Import referente a `action creator` criada para disparar a ação para a store.

class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    // Esse estado irá armazenar o valor do input
  }

  render() {
    const { myFirstDispatch } = this.props
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        <button onClick={() => myFirstDispatch(this.state.inputValue)}> 
          {/* Executar qualquer tarefa */}
        </button> 
        {/* O botão está disparando o mapDispatch e enviando o valor para a store */}
      </div>
    );
  }
}

// utilizando `action`:
// const mapDispatchToProps = (dispatch) => ({
  // myFirstDispatch: (state) => dispatch({ type: 'NEW_ACTION', state }),
// });

// No caso acima, vemos que o mapDispatchToProps é uma função que retorna um objeto, e sua key recebe uma callback.
// Essa callback terá um parâmetro correspondente ao estado que será enviado para a store.
// Nessa callback, chamamos a função `dispatch`, que receberá como argumento a `action`,
// que é um objeto contendo o "type" e o parametro da callback, o "state", que será o novo valor do estado.


// utilizando `action creator `:

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))});

// Podemos utilizar o mapDispatchToProps de outra forma também! Lembra do arquivo que foi criado contendo a função "newAction?
// No exemplo acima, o dispatch está recebendo como argumento a "newAction", que também é chamada de `action creator`.
// E é aí que está a vantagem de utilizar  as `action creator`, pois elas também geram uma `action`.

export default connect(null, mapDispatchToProps)(SecondComponent);