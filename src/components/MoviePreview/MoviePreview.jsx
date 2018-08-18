import React, { Component } from 'react';
import './MoviePreview.css';
import { Link } from "react-router-dom";



class MoviePreview extends Component {
  getPoster (movie) {
    return movie.Poster === "N/A" ? 
      <div className="post-placeholder"></div> :
      <img src={movie.Poster} alt={movie.Title} />
  }

  render() {
    const movie = this.props.movie
    const path = `/movie/${movie.imdbID}`

    return (
      <Link to={path} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="row">
          <div className="col-2">{this.getPoster(movie)}</div>
          <div className="col-10">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <small>{movie.Type}</small>
          </div>
        </div>
      </Link>
    )
  }
}

export default MoviePreview;
