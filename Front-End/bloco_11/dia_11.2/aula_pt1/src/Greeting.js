import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName} </h1>);
  }
}

export default Greeting;