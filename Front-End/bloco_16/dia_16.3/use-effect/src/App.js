import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit ] = useState(10);
  
  //componentDidMount didUptade shouldUptade
  useEffect(  () => {
   const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const { results } = async () => (await fetch(url).then((resp) => resp.json()))
    setPokemons(results); // componentDidMount
    return () => { console.log('ola')} // componentWillUnmount
   }, [limit]) // componentDidUpdate componentShouldUpdate

   // é possível ter mais de um useEffect dentro deu mesmo componente. Para gerenciar diferentes situações denmtro do componente, é visto como uma boa prática ter mais de um useEffect.
  
const handleMorePokemons = () => {
  setLimit(limit + 10);
}
  return (
    <div className="App">
    <h1>Olá mundo</h1>
    <button type='button' onClick={handleMorePokemons} >Buscar mais pokemons</button>
    <ul>
      { pokemons.map((item) => (
        <li key={item.name}> {item.name} </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
