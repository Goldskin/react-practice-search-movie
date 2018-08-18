import React from 'react';
import ReactDOM from 'react-dom';
import Poster from './Poster';

it('renders with an image', () => {
  const url = 'http://https://images-na.ssl-images-amazon.com/images/M/MV5BOTM2ZDAwMzUtOWUwMy00ZWNhLWI2MWMtYTBiOTZhOTU2MTBmXkEyXkFqcGdeQXVyMjIyMjQyMw@@._V1_SX300.jpg'
  const alt = 'title'
  const div = document.createElement('div');
  ReactDOM.render(<Poster url={url} alt={alt}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without an image', () => {
  const url = 'N/A'
  const alt = null
  const div = document.createElement('div');
  ReactDOM.render(<Poster url={url} alt={alt}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});