import React, { Component } from 'react'
import Daugther from './Daugther'

export default class Father extends Component {
  render() {
    return (
      <div>
        Eu sou o pai!
        <Daugther />
      </div>
    )
  }
}
