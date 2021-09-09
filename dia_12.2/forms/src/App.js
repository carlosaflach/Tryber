import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
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
          <fieldset>
            <label htmlFor="name"> Name:
              <input
                type='name'
                onChange={this.handleChange}
                name='name'
                value={this.state.name}>
              </input>
            </label>
            <label htmlFor="email"> Email:
              <input type='email'
                onChange={this.handleChange}
                name='email'
                value={this.state.email} >
              </input>
            </label>
            <label htmlFor="text"> Informações complementares:
              <textarea name="text"></textarea>
            </label>
            <label htmlFor="select">Estado:
              <select onChange={this.handleChange} name="select">
                <option></option>
                <option>SC</option>
                <option>RS</option>
                <option>RJ</option>
              </select>
            </label>
            <label htmlFor="check"> Presente:
              <input type="checkbox" name="check"
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              <input type="file"></input>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default App;
