import React, { Component } from 'react';
import './MovieResume.css';
import Poster from "../Poster/Poster";



class MovieResume extends Component {
  render() {
    const movie = this.props.movie
    return (
      <div className="row">
        <div className="col-2">
          <Poster 
            url={movie.Poster}
            alt={movie.Title}/>
        </div>
        <div className="col-10">
          <h1>{movie.Title}</h1>
          <p><span className="font-weight-bold">Year:</span> {movie.Year}</p>
          <p><span className="font-weight-bold">Type:</span> {movie.Type}</p>
          <p><span className="font-weight-bold">Actors:</span> {movie.Actors}</p>
          <p><span className="font-weight-bold">Synopsys:</span> {movie.Plot}</p>
          <p><span className="font-weight-bold">Genre:</span> {movie.Genre}</p>
          <p><span className="font-weight-bold">Release:</span> {movie.Released}</p>
        </div>
      </div>
    )
  }
}

export default MovieResume;
