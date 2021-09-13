import React from "react";

class Profile extends React.Component {
  render() {
    const { ship } = this.props.match.params
    // Através do ship conseguimos receber parâmetros pela nossa URL, com isso podemos fazer páginas em que passamos um número de id, e através disso fazer uma requisição de uma API.
    return (
      <h2> Perfil: {this.props.name}, do navio {ship} </h2>
    )
  }
}

export default Profile;