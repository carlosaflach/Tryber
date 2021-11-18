import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;