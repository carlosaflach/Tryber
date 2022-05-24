import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <h2> Eu sou o Carlos dos 7 mares!!</h2>
        <Link to="/">Voltar à Home</Link>
      </div>
    )
  }
}

export default About;
