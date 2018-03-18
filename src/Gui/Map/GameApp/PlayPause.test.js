import React from 'react';
import ReactDOM from 'react-dom';
import PlayPause from './PlayPause'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayPause isPlay={true} />, div);
  ReactDOM.unmountComponentAtNode(div);

  ReactDOM.render(<PlayPause isPlay={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
