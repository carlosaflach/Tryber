import React, { Component } from 'react'
import Grandmother from './Grandmother'
import MyContext from '../context/MyContext'

export default class GreatGrandMother extends Component {
  constructor() {
    super();
    this.state = {
      money: 1000000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((prevState) => ({ money: prevState.money - 100}))
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          Eu sou a Bisavó
          <Grandmother />
        </div>
      </MyContext.Provider>
    )
  }
}
