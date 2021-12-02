import React, { Component } from 'react'
import Father from './Father'

export default class Grandmother extends Component {
  render() {
    return (
      <div>
        Eu sou a Avó
        <Father />
      </div>
    )
  }
}
