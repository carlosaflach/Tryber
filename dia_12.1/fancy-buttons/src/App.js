// src/App.js
import React from 'react';



class App extends React.Component {
  constructor() {
    super ()
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    this.setState((prevstate) => ({
        clicksBtnOne: prevstate.clicksBtnOne + 1,
    }));
    console.log(this)
  }

  handleButtonTwo() {
    this.setState((prevstate) => ({
      clicksBtnTwo: prevstate.clicksBtnTwo + 1,
  }));
  console.log(this)
  }

  handleButtonThree() {
    this.setState((prevstate) => ({
      clicksBtnThree: prevstate.clicksBtnThree + 1,
  }));
  console.log(this)
  }


  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1</button>
        <button onClick={ this.handleButtonTwo }>Botão 2</button>
        <button onClick={ this.handleButtonThree }>Botão 3</button>
      </div>
    );
  }
}

export default App;
