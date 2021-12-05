import React, { Component } from 'react';
import MyContext from '../context/MyContext';

export default class Daugther extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          ({money, spendMoney})=> ( // Aqui é utilziado o render props, na passagem de informação, onde é necessário ter apenas um nó externo, podendo ter mais do que um interno, mas SEMPRE UM EXTERNO, nesse caso a div.
            <div>
              <p>{`Eu tenho ${money} para gastar`}</p>
            <button onClick={spendMoney}>Pedir um IFOOD</button>
            </div>
            
          )
        }
      </MyContext.Consumer>
    )
  }
}

// O context APi somente provê as informações de uma forma diferente, é necessário ainda criar o estado dentro do componente de classe que eu pretendo prover a informação para outros componentes.