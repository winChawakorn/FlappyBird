import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './GameApp'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
