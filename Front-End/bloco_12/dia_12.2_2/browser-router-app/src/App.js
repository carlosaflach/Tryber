
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Howto from './Howto';

function App() {
  return (
   <BrowserRouter>
      <Route path='/about' component={ About } />
      <Route path='/howto' component={ Howto } />
      <Route path='/profile' render={(props)=> <Profile {...props} name="o mestre dos magos da web" />} />
      {/* Essas props passadas, são as que existem por tras do panos no route, embora possamos passar outras props como props, um exemplo movies. */}
      <Route exact path='/' component={ Home } /> 
      {/* Se deixarmos sem o exact path na rota /, ela ira renderizar em todas as rotas, pois a string / faz caminho comum com todas as outras. */}
   </BrowserRouter>
  );
}

export default App;
