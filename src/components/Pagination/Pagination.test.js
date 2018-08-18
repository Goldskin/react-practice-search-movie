import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

it('renders without crashing', () => {
  const result = 2871
  const limit = 10
  const div = document.createElement('div');

  ReactDOM.render(<Pagination result={result} limit={limit}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
