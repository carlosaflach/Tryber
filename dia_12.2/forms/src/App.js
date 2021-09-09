import './App.css';
import React from 'react';
import Corpo from './Corpo';

class App extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      text: '',
      checkbox: false,
      select: '',
    }
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1> Formulário em React: Componentes Controlados</h1>
        <form>
          <Corpo name={this.state.name} email={this.state.email} checkbox={this.state.checkbox} 
          select={this.state.select} handleChange={this.handleChange} text={this.state.text}
          />
        </form>
      </div>
    )
  }

}

export default App;
