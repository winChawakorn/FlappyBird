import React from 'react'
import KeyHandler, {KEYPRESS} from 'react-key-handler';

import Bird from '../Bird/Bird'
import Obstacle from './Obstacle'

import Game from '../../Controller/Game'

class GameApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game : "Loading",
      isPlay : false
    }
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  componentDidMount() {
      this.setState( { game : Game } )
      Game.refresh = () => {this.refresh()}
  }

  start() {
    this.state.game.start()
    this.setState( { isPlay : true} )
  }

  stop() {
    this.state.game.stop()
    this.setState( { isPlay : false} )
  }

  Jump(event) {
    console.log(this.state);
    event.preventDefault();
    if(this.state.isPlay)
      this.state.game.Jump()
  }

  refresh() {
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <KeyHandler keyEventName={KEYPRESS} keyValue=' ' onKeyHandle={ (event)=> this.Jump(event) } />
        {this.state.isPlay && <div
          onClick={ ()=> { this.state.game.Jump() }}
          style={{position : 'fixed' , top :'0' , left : '0' , width : `100%` , height : `100vh` , background: 'black' ,opacity : 0.5 , zIndex : '500'}}>
        </div>}
        <div style={{position : 'fixed' , right : `2%` , top : `2%` , zIndex : '600'}}>
        { this.state.isPlay && <button onClick={ ()=> {this.stop()}}>Pause</button>}
        { !this.state.isPlay && <button onClick={ ()=> {this.start()}}>Play</button>}
        </div>
        <Bird />
        <Obstacle />
      </div>
    )
  }
}

export default GameApp
