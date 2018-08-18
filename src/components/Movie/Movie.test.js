import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';

it('renders without crashing', () => {
  const id = "tt3748528"
  const div = document.createElement('div');
  ReactDOM.render(<Movie id={id} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
