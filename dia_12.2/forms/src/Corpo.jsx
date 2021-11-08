import React from 'react';

class Corpo extends React.Component {
  render () {
    const { name, email, checkbox, select, handleChange, text } = this.props;

    return (
      <fieldset>
            <label htmlFor="name"> Name:
              <input
                type='name'
                onChange={handleChange}
                name='name'
                value={name}>
              </input>
            </label>
            <label htmlFor="email"> Email:
              <input type='email'
                onChange={handleChange}
                name='email'
                value={email} >
              </input>
            </label>
            <label htmlFor="text"> Informações complementares:
              <textarea name="text" value={text} onChange={handleChange} />
            </label>
            <label htmlFor="select">Estado:
              <select onChange={handleChange} name="select"
              value={select}>
                <option></option>
                <option>SC</option>
                <option>RS</option>
                <option>RJ</option>
              </select>
            </label>
            <label htmlFor="check"> Presente:
              <input type="checkbox" name="checkbox"
                onChange={handleChange}
                value={checkbox}
              ></input>
            </label>
            <label>
              <input type="file"></input>
            </label>
          </fieldset>
    );
  }
}

export default Corpo;
