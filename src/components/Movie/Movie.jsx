import React, { Component } from 'react';
import './Movie.css';
import { API_ROOT } from '../../config/api';
import MovieResume from "../MovieResume/MovieResume";

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{ id: props.id }],
      isLoaded: true,
      mounted: false,
      isError: false,
      movie: {}
    }
  }

  componentWillMount () {
    this.mounted = true;
    this.searchMovie(this.props.id)
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  searchMovie (id) {
    this.setState({ 
      isLoaded: false,
      isError: false
    })

    return fetch(`${API_ROOT}&i=${id}`)
      .then(res => res.json())
      .then(result => {
        if (result.Response === "False") {
          return {
            isLoaded: true,
            isError: true,
            movie: {}
          }
        }

        return {
          history: this.state.history.concat([{ id: id }]),
          isLoaded: true,
          isError: false,
          movie: result
        }
      })
      .catch(error => ({
        isLoaded: true,
        isError: true
      })).then(state => {
        if (this.mounted) {
          this.setState(state)
        }
      })
  }

  render() {
      const movie = this.state.movie
      if (!this.state.isLoaded) {
        return <div>loading...</div>
      }

      return (
        <div className="Movie" >
          <MovieResume movie={movie}/>
        </div>
      )
    }
}

export default Movie;
