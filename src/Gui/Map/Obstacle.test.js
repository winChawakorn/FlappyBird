import React from 'react';
import ReactDOM from 'react-dom';
import Obstacle from './Obstacle'
import Game from '../../Controller/Game'

import Obstruct from '../../Controller/Obstacle/Obstacle'


it('renders without crashing', () => {
  const div = document.createElement('div');
  Game.obstracts = [ new Obstruct() ]
  ReactDOM.render(<Obstacle Game={Game} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
