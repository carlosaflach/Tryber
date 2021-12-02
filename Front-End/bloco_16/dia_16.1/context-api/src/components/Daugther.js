import React, { Component } from 'react';
import MyContext from '../context/MyContext';

export default class Daugther extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          value => (
            <div>
              <p>{`Eu tenho ${value.money} para gastar`}</p>
            <button onClick={value.spendMoney}>Pedir um IFOOD</button>
            </div>
            
          )
        }
      </MyContext.Consumer>
    )
  }
}

// O context APi somente provê as informações de uma forma diferente, é necessário ainda criar o estado dentro do componente de classe que eu pretendo prover a informação para outros componentes.