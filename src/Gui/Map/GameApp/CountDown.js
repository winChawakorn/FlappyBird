import React from 'react'
import './CountDown.css'

class CountDown extends React.Component {
  render() {
    return (<div>{ this.props.count >= 0 && <div className="countdown">
                <h1 className="countdown-center">{this.props.count}</h1>
                </div>}
            </div>)
  }
}

export default CountDown
