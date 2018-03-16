import React from 'react'

// use bird
import bird from '../../Controller/Bird/Bird'

class Bird extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bird : bird,
    }
  }

  render() {
    console.log(this.state.bird);
    return (<div>
              <div id="bird" style={{
                position: 'absolute',
                top: `${bird.x}px`,
                left: `${bird.y}px`,
                width: `${bird.width}px` ,
                height: `${bird.height}px` ,
                border: '1px solid black'}}>
                Bird
              </div>
            </div>)
  }
}

export default Bird
