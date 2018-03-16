import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    userinfo() {
        if(this.props.login){
            return (
                <div style={{display: 'flex', width: '150px'}}>
                    <div className="profile-pic">pic</div>
                    <span style={{margin: 'auto'}}>username</span>
                </div>
            );
        }
        return <div>Guest</div>
    }

    render() {
        return (
            <div>
                <div className="userinfo">
                    {this.userinfo()}
                </div>
                <div className="menu">
                    <h1>FLAPPY BIRD</h1>
                    <button onClick={() => {this.props.changePage('game')}}>Start</button>
                    <button>Scoreboard</button>
                    <button>Option</button>
                    <button onClick={() => {this.props.changePage('home')}}>Logout</button>
                </div>
            </div>
        );
    }
}

export default Menu;
