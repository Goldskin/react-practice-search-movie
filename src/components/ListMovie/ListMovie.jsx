import React, { Component } from 'react';
import './ListMovie.css';
import MoviePreview from '../MoviePreview/MoviePreview'

class ListMovie extends Component {
  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.imdbID}>
          <MoviePreview movie={movie}/>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">{this.renderList()}</ul>
    )
  }
}

export default ListMovie;
