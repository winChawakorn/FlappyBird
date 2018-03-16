import React from 'react'
import './Signup.css'

class Signup extends React.Component {

    render() {
        return (
            <div className="signup">
                <h1>FLAPPY BIRD</h1>
                <h2>Sign up</h2>
                <input className="textfield" placeholder="Username"></input>
                <input className="textfield" placeholder="Password" type="password"></input>
                <input className="textfield" placeholder="Confirm Password" type="password"></input>
                <button onClick={ () => this.props.changePage('home')}>Sign up</button>
                <button style={{background: 'darkgrey'}} onClick={ () => this.props.changePage('home')}>Cancel</button>
            </div>
        );
    }
}

export default Signup