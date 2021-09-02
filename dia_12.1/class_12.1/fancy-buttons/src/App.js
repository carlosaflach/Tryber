 // src/App.js
 import React from 'react';

 function handleButtonOne() {
   console.log('Clicou no botão 1!');
 }

 function handleButtonTwo() {
   console.log('Clicou no botão 2!');
 }

 function handleButtonThree() {
   console.log('Clicou no botão 3!');
 }

 class App extends React.Component {
   render() {
     return (
       <div>
         <button onClick={ handleButtonOne }>Botão 1</button>
         <button onClick={ handleButtonTwo }>Botão 2</button>
         <button onClick={ handleButtonThree }>Botão 3</button>
       </div>
     );
   }
 }

 export default App;
