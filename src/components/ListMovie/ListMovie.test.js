import React from 'react';
import ReactDOM from 'react-dom';
import ListMovie from './ListMovie';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListMovie movies={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
