import React from 'react';
import Obstruct from '../../Controller/Obstacle/Obstacle'
import Game from '../../Controller/Game'

import setting from '../../Controller/Map/Setting'

class Obstacle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getResponsiveLeft(obstracle) {
      const divider = setting.width / 100
      return (obstracle.x / divider) + "%"
    }

    getResponsiveWidth(obstracle) {
      const divider = setting.width / 100
      return (obstracle.width / divider) + "%"
    }

    getResponsiveHeightTop(obstracle) {
      const divider = setting.height / 100
      return (obstracle.height / divider) + "%"
    }

    getResponsiveHeightBot(obstracle) {
      const divider = setting.height / 100
      return ((setting.height - obstracle.height - setting.obstract_between) / divider) + "%"
    }

    getObstacts() {
      // use this for test otherwise comment it
      // Game.obstracts = [ new Obstruct() ]
      /////////
      return <div>{Game.obstracts.map((obstacle , id) => {
        return (
                <div key={id}>
                  <div style={{width: `${this.getResponsiveWidth(obstacle)}`,
                              height: `${this.getResponsiveHeightTop(obstacle)}`,
                              position : 'absolute',
                              background: 'red',
                              left: `${this.getResponsiveLeft(obstacle)}`,
                              backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                              border: '3px solid black',
                              borderTop: '0'}}>
                  </div>
                  <div style={{width: `${this.getResponsiveWidth(obstacle)}`,
                              height: `${this.getResponsiveHeightBot(obstacle)}`,
                              bottom: '0',
                              left: `${this.getResponsiveLeft(obstacle)}`,
                              position: 'absolute',
                              backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                              border: '3px solid black',
                              borderBottom: '0',}}>
                  </div>
                </div>
        )
      })}</div>
    }

    render() {
      return (<div>{this.getObstacts()}</div>)
    }
}

// {/*<div style={{bottom: `calc(730px - ${obstacle.height}px)`,
//             position: 'absolute',
//             width: '110px',
//             height: '50px',
//             backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
//             border: '3px solid black',
//             marginLeft: '-8px'}}></div>*/}

// {/*<div style={{width: '110px',
//     height: '50px',
//     backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
//     border: '3px solid black',
//     borderTop: '0',
//     marginLeft: '-8px',
//     maringTop: '50px'}}></div>*/}
export default Obstacle;
