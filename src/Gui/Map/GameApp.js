import React from 'react'
import KeyHandler, {KEYPRESS} from 'react-key-handler';

import Bird from '../Bird/Bird'
import Obstacle from './Obstacle'
import PlayPause from './GameApp/PlayPause'
import CountDown from './GameApp/CountDown'
import Score from './GameApp/Score'

import Game from '../../Controller/Game'

class GameApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game : "Loading",
      isPlay : false,
      isDead : false,
      count : 0,
    }
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.gameStop = this.gameStop.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
      this.setState( { game : Game } )
      Game.gameStop = () => {this.gameStop()}
      this.start()
  }

  start() {
    if(!this.state.isPlay){
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
  }

  stop() {
    if(this.state.isPlay) {
      this.state.game.stop()
      this.setState( { isPlay : false} )
    }
  }

  reset() {
    this.state.game.reset()
    this.setState( {isDead : false} )
    this.start()
  }

  Jump(event) {
    event.preventDefault();
    if(this.state.isPlay)
      this.state.game.Jump()
  }

  gameStop() {
    this.setState( { isPlay : false} )
    if(Game.isDead) {
      // handle dead
      this.setState( {isDead : true} )
    }
  }

  render() {
    return (
      <div>
        {this.state.isDead && <div
                              onClick={ () => {this.reset()}}
                              style={{ position:'fixed',
                                        top :'0' ,
                                        left : '0' ,
                                        width : `100%` ,
                                        height : `100vh` ,
                                        background: 'rgba(0,0,0,0.3)',
                                        color : 'white' ,
                                        zIndex : '999'}}>
                                  <h1 align="center">GAME OVER</h1>
                                  <h3 align="center">click to restart</h3>
                              </div>}
        <CountDown count={this.state.count}/>
        <KeyHandler keyEventName={KEYPRESS} keyValue=' ' onKeyHandle={ (event)=> this.Jump(event) } />
        <KeyHandler keyEventName={KEYPRESS} keyValue='s' onKeyHandle={ ()=> this.reset() } />
        {this.state.isPlay && <div
          onClick={ (event)=> { this.Jump(event) }}
          style={{position : 'fixed' , top :'0' , left : '0' , width : `100%` , height : `100vh` , background: 'black' ,opacity : 0, zIndex : '500'}}>
        </div>}
        <PlayPause isPlay={this.state.isPlay} start={this.start} stop={this.stop}/>
        <Bird Game={Game}/>
        <Obstacle Game={Game}/>
        <Score Game={Game}/>
      </div>
    )
  }
}

export default GameApp
