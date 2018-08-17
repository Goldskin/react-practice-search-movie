import React, { Component } from 'react';
import './ListMovie.css';
import Movie from '../Movie/Movie'

class ListMovie extends Component {
  renderList() {
    return this.props.movies.map((movie, key) => {
      return (
        <div key={key}><Movie movie={movie}/></div>
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
