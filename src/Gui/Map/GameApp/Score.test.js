import React from 'react';
import ReactDOM from 'react-dom';
import Score from './Score'
import Game from '../../../Controller/Game'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Score Game={Game} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
