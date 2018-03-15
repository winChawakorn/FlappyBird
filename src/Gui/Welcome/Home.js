import React from 'react';

var smallBtn = { width: '100px', padding: '6px', marginLeft: '1em', fontSize: '16px' };
var or = {display: 'flex', fontWeight: 'bold', marginTop: '3em', marginBottom: '2em'};

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <h1>FLAPPY BIRD</h1>
                <input placeholder="Username" className="textfield" />
                <input placeholder="Password" className="textfield" type="password" />
                <button className="button">Login</button>
                <div>
                    Don't have an account ?
                        <button className="button.small" style={smallBtn}>Sign up</button>
                </div>
                <div style={or}>
                    <hr style={{width: '100px'}}/>OR<hr style={{width: '100px'}}/> 
                </div>
                <button>GUEST &nbsp;&nbsp;Login</button>
            </div>
        );
    }
}

export default Home;