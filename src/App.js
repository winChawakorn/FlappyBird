import React, { Component } from 'react';

import './App.css';
import Home from './Gui/Welcome/Home';
import Menu from './Gui/Welcome/Menu';
import Signup from './Gui/Welcome/Signup'
import GameApp from './Gui/Map/GameApp'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "home",
      login: false
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(page, login) {
    this.setState({
      page: page,
      login: login
    });
  }
  
  render() {
    return (
      <div style={{
        width: `100%`,
        height: `100%`,
        clip: 'auto',
        position: 'absolute',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to right, #adefff, white)'
      }}>
        {this.state.page === "home" && <Home changePage={this.changePage} />}
        {this.state.page === "menu" && <Menu changePage={this.changePage} login={this.state.login} />}
        {this.state.page === "signup" && <Signup changePage={this.changePage} />}
        {this.state.page === "game" && <GameApp />}
      </div>
    );
  }
}

export default App;
