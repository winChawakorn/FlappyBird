import React, { Component } from 'react';

import './App.css';
import './Gui/Welcome/Home.css';

import GameApp from './Gui/Map/GameApp'



class App extends Component {

  render() {
    return (
      <div style={{
        width: `100%`,
        height: `100%`,
        clip: 'auto',
        position: 'absolute',
        overflow: 'hidden',}}>
        <GameApp />
      </div>
    );
  }
}

export default App;
