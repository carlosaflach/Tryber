import React from "react";
import { Link } from "react-router-dom";
// import About from "./About";
// import { Route } from 'react-router-dom'
// import HowTo from "./HowTo";
// import Profile from "./Profile";

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Minha Homepage</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
