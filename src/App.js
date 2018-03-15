import React, { Component } from 'react';

// test bird
import Bird from './Gui/Bird/Bird.js'
// test controller
import Game from './Controller/Game.js'

class App extends Component {
  constructor() {
    super()
    this.state = { playing : false}
    this.startGame = this.startGame.bind(this)
    this.stopGame = this.stopGame.bind(this)
  }

  startGame() {
    Game.start();
    this.setState({ playing : true})
  }

  stopGame() {
    Game.stop();
    this.setState({ playing : false})
  }
  render() {
    return (
        <div>
          <Bird isPlay={this.state.playing}/>
          <h1 onClick={ ()=> { this.startGame()} }>START</h1>
          <h1 onClick={ ()=> { this.stopGame()} }>STOP</h1>
        </div>
    );
  }
}

export default App;
