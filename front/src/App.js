import React from 'react';
import People from './containers/peopleList';


class App extends React.Component {
  render() {
    return (
      <div>
          <h1 align="center">Bienvenido equipo SGI</h1>
          <People />
      </div>
    );
  }
}

export default App;
