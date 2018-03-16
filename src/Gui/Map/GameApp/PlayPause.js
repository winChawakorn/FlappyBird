import React from 'react'

import playImg from '../../../images/play.png'
import pauseImg from '../../../images/pause.png'

class PlayPause extends React.Component {
  render() {
    return (
              <div style={{position : 'fixed' , right : `2%` , top : `2%` , zIndex : '600'}}>
              { this.props.isPlay && <button style={{background:'none' , border: '0'}} onClick={ ()=> {this.props.stop()}}><img src={pauseImg} alt="pause" /></button>}
              { !this.props.isPlay && <button style={{background:'none' , border: '0'}} onClick={ ()=> {this.props.start()}}><img src={playImg} alt="play" /></button>}
              </div>
            )
  }
}

export default PlayPause
