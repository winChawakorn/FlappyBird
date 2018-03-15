import React, { Component } from 'react';

import './App.css';
import Home from './Gui/Welcome/Home';
import Menu from './Gui/Welcome/Menu';
import Obstacle from './Gui/Map/Obstacle';
import './Gui/Welcome/Home.css';
import './Gui/Welcome/Menu.css';
import Map from './Gui/Map/Map'

class App extends Component {
  render() {
    return (
      <div>
          {/*<Home />*/}
          <Obstacle/>
      </div>
    );
  }
}

export default App;
