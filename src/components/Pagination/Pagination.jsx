import React, { Component } from 'react';
import './ListMovie.css';
import MoviePreview from '../MoviePreview/MoviePreview'

class ListMovie extends Component {
  renderList() {
    return this.props.movies.map((movie, key) => {
      return (
        <div key={movie.imdbID}><MoviePreview movie={movie}/></div>
      )
    })
  }

  render() {
    return (
      <div className="list-group">{this.renderList()}</div>
    )
  }
}

export default ListMovie;
