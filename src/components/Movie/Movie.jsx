import React, { Component } from 'react';
import './Movie.css';
class Movie extends Component {
  getPoster () {
    return this.props.movie.Poster === "N/A" ? 
      <div className="post-placeholder"></div> :
      <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
  }

  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="row">
          <div className="col-2">{this.getPoster()}</div>
          <div className="col-10">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{this.props.movie.Title}</h5>
              <small>{this.props.movie.Year}</small>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Movie;
