import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h1>FLAPPY BIRD</h1>
                <button>Start</button>
                <button>Leaderboard</button>
                <button>Option</button>
                <button>Logout</button>
            </div>
        );
    }
}

export default Menu;