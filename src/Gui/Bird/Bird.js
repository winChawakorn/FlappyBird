import React from 'react'

// use bird
import bird from '../../Controller/Bird/Bird'
import birdImg from '../../images/dragon.gif'
import setting from '../../Controller/Map/Setting'

class Bird extends React.Component {

    componentDidMount() {
        this.props.Game.refreshBird = () => this.refreshBird()
    }

    getResponsiveLeft() {
        const divider = setting.width / 100
        return (bird.x / divider) + "%"
    }

    getResponsiveTop() {
        const divider = setting.height / 100
        return (bird.y / divider) + "%"
    }

    getResponsiveWidth() {
        const divider = setting.width / 100
        return (bird.width / divider) + "%"
    }

    getResponsiveHeight() {
        const divider = setting.height / 100
        return (bird.height / divider) + "%"
    }

    refreshBird() {
        this.forceUpdate()
    }

    render() {
        return (<div>
            <div id="bird" style={{
                position: 'absolute',
                top: `${this.getResponsiveTop()}`,
                left: `${this.getResponsiveLeft()}`,
                width: `${this.getResponsiveWidth()}`,
                height: `${this.getResponsiveHeight()}`
            }}>
                <img src={birdImg} alt="bird" style={{ width: `100%`, height: `100%` }} />
            </div>
        </div>)
    }
}

export default Bird
