import React, { Component } from 'react';

import './App.css';
import Home from './Gui/Welcome/Home';
import Menu from './Gui/Welcome/Menu';
import Obstacle from './Gui/Map/Obstacle';
import './Gui/Welcome/Home.css';
import Game from './Controller/Game'
import Bird from './Gui/Bird/Bird'

class App extends Component {

  componentDidMount() {
  }

  refresh() {
    this.forceUpdate()
  }
  render() {
    Game.refresh = () => {this.refresh()}
    return (
      <div>
          <button onClick={ ()=> Game.Jump()} > JUMP </button>
          <button onClick={ ()=> Game.start()} > start </button>
          <button onClick={ ()=> Game.stop()} > Stop </button>
          <Bird />
          <Obstacle />
      </div>
    );
  }
}

export default App;
