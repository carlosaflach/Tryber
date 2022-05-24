import React from "react";
import Home from "./Home";
import About from "./About";
import HowTo from "./HowTo";
import Profile from "./Profile";

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
       <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/profile/:ship" render={(props) => <Profile {...props} name="O Barbaruiva da web." />} /> {/* Quando passamos um array de props, usamos o spread operator para passar essa informação e o nosso componente enxergar todas elas. Quando passamos o array de props, ele passa também o history que guarda a informação das rotas acessadas pelo React Route. */}
        {/* */}
        <Route exact path="/" component={Home} /> {/* Utilizamos o exact porque o caminho / bate com outros caminhos já especificados, sem utilizar o exact toda vez que acessamos o path da url home ficaria aparecendo também. */}
        
    </BrowserRouter>
  );
}

export default App;
