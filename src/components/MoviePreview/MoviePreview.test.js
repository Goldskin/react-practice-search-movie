import React from 'react';
import ReactDOM from 'react-dom';
import MoviePreview from './MoviePreview';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const movie = {
    "Title": "Les soeurs Soleil",
    "Year": "1997",
    "imdbID": "tt0120156",
    "Type": "movie",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGVhNDAxMGQtYWY3OC00MmViLWI0YjgtYzY0YTc4ZTQzMzZmXkEyXkFqcGdeQXVyMTc5NDc1MDI@._V1_SX300.jpg" 
  }

  const currentRoute = <Router>
    <MoviePreview movie={movie} />
  </Router>

  const div = document.createElement('div');
  ReactDOM.render(currentRoute, div);
  ReactDOM.unmountComponentAtNode(div);
});
