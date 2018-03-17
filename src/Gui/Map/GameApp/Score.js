import React, { Component } from 'react'

export class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score : 0
        }
        this.updateScore = this.updateScore.bind(this)
    }
    componentDidMount = () => {
      this.props.Game.updateScore = () => this.updateScore()
    }

    updateScore() {
      console.log("Updating")
      this.setState( { score : this.props.Game.score})
    }

    render() {
        return (
                <div style={{ top : '0' , left : '0' , position: 'fixed' }}>
                    <div style={{ display : 'flex'}}>
                        <h3>score : </h3>
                        <h3> {this.state.score}</h3>
                    </div>
                </div>
                )
    }
}

export default Score
