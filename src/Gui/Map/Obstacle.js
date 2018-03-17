import React from 'react';
// import Obstruct from '../../Controller/Obstacle/Obstacle'

import setting from '../../Controller/Map/Setting'

class Obstacle extends React.Component {

    componentDidMount() {
      this.props.Game.refreshObstracts = () => { this.refreshObstracts() }
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
      return <div>{this.props.Game.obstracts.map((obstacle , id) => {
        return (
                <div key={id}>
                  <div style={{width: `${this.getResponsiveWidth(obstacle)}`,
                              height: `${this.getResponsiveHeightTop(obstacle)}`,
                              position : 'absolute',
                              background: 'red',
                              left: `${this.getResponsiveLeft(obstacle)}`,
                              backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                              border: '3px solid black',
                              borderTop: '0',
                              overflow: 'hidden'}}>
                  </div>
                  <div style={{width: `${this.getResponsiveWidth(obstacle)}`,
                              height: `${this.getResponsiveHeightBot(obstacle)}`,
                              bottom: '0',
                              left: `${this.getResponsiveLeft(obstacle)}`,
                              position: 'absolute',
                              backgroundImage: 'linear-gradient(to right, brown, #f5c48d)',
                              border: '3px solid black',
                              borderBottom: '0',
                              overflow: 'hidden'}}>
                  </div>
                </div>
        )
      })}</div>
    }

    refreshObstracts() {
      this.forceUpdate()
    }

    render() {
      return (<div>{this.getObstacts()}</div>)
    }
}

export default Obstacle;
