import React from 'react';
import Obstruct from '../../Controller/Obstacle/Obstacle'
import Game from '../../Controller/Game'

class Obstacle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getObstacts() {
      // use this for test otherwise comment it
      // Game.obstracts = [ new Obstruct() ]
      /////////
      return <div>{Game.obstracts.map((obstacle , id) => {
        console.log(obstacle);
        return (
                <div key={id}>
                  <div style={{width: `${obstacle.width}px`,
                              height: `${obstacle.height}px`,
                              position : 'absolute',
                              background: 'red',
                              left: `${obstacle.x}px`,
                              backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                              border: '3px solid black',
                              borderTop: '0'}}>
                  </div>
                  <div style={{width: `${obstacle.width}px`,
                              height: `calc(800px - ${obstacle.between}px - ${obstacle.height}px)`,
                              bottom: '0',
                              left: `${obstacle.x}px`,
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
