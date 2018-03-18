import React from 'react';
import ReactDOM from 'react-dom';

import Bird from './Bird'
import Game from '../../Controller/Game'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bird Game={Game}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
