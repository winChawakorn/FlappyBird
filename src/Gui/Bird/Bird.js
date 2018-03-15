import React from 'react'

// use bird
import bird from '../../Controller/Bird/Bird'

class Bird extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bird : bird,
    }
    this.refresh = this.refresh.bind(this)
  }

  render() {
    return (<div>
              <div id="bird" onClick={()=>{
                this.refresh()
              }} style={{
                position: 'absolute',
                top: `${bird.x}%`,
                left: `${bird.y}%`,
                width: `${bird.width}px` ,
                height: `${bird.height}px` ,
                border: '1px solid black'}}>
                Bird
              </div>
            </div>)
  }
}

export default Bird
