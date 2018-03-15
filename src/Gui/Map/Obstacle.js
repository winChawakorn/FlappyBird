import React from 'react';
import obstacle from '../../Controller/Obstacle/Obstacle';

class Obstacle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          obstacle : obstacle,
        }
    }

    render() {
        return (
            <div>
                <div style={{width: `${obstacle.width}px`, 
                            height: `${obstacle.height}px`,
                            background: 'red',
                            backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                            border: '3px solid black',
                            borderTop: '0'}}>
                    <div style={{bottom: `calc(730px - ${obstacle.height}px)`,
                                position: 'absolute',
                                width: '110px',
                                height: '50px',
                                backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                                border: '3px solid black',
                                marginLeft: '-8px'}}></div>
                </div>
                <div style={{width: `${obstacle.width}px`,
                            height: `calc(800px - ${obstacle.between}px - ${obstacle.height}px)`,
                            bottom: '0',
                            position: 'absolute',
                            backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                            border: '3px solid black',
                            borderBottom: '0',}}>
                    <div style={{width: '110px',
                                height: '50px',
                                backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                                border: '3px solid black',
                                borderTop: '0',
                                marginLeft: '-8px',
                                maringTop: '50px'}}></div>
                </div>
            </div>
        );
    }
}

export default Obstacle;