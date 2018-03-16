import React from 'react'
import KeyHandler, {KEYPRESS} from 'react-key-handler';

import Bird from '../Bird/Bird'
import Obstacle from './Obstacle'
import PlayPause from './GameApp/PlayPause'
import CountDown from './GameApp/CountDown'

import Game from '../../Controller/Game'

class GameApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game : "Loading",
      isPlay : false,
      count : 0,
    }
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  componentDidMount() {
      this.setState( { game : Game } )
      Game.refresh = () => {this.refresh()}
      this.start()
  }

  start() {
    this.setState( {count : 3} )
    var iid = setInterval( () => {
      if(this.state.count >= 0) {
          this.setState( {count : this.state.count - 1} )
      } else {
        this.setState( {isPlay : true} )
        this.state.game.start()
        clearInterval(iid)
      }
    } , 1000)
  }

  stop() {
    this.state.game.stop()
    this.setState( { isPlay : false} )
  }

  Jump(event) {
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
        <CountDown count={this.state.count}/>
        <KeyHandler keyEventName={KEYPRESS} keyValue=' ' onKeyHandle={ (event)=> this.Jump(event) } />
        {this.state.isPlay && <div
          onClick={ ()=> { this.state.game.Jump() }}
          style={{position : 'fixed' , top :'0' , left : '0' , width : `100%` , height : `100vh` , background: 'black' ,opacity : 0, zIndex : '500'}}>
        </div>}
        <PlayPause isPlay={this.state.isPlay} start={this.start} stop={this.stop}/>
        <Bird />
        <Obstacle />
      </div>
    )
  }
}

export default GameApp
