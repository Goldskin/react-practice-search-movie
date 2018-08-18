import React, { Component } from 'react';
import './Home.css';
import Search from '../Search/Search';
import { API_ROOT } from '../../config/api';
import ListMovie from '../ListMovie/ListMovie';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{ query: '' }],
      isLoaded: true,
      isError: false,
      step: 0,
      movies: []
    }
  }

  searchQuery (query) {
    this.setState({isLoaded: false})

    fetch(`${API_ROOT}&s=${query}`)
      .then(res => res.json())
      .then(result => {
        if (result.Response === "False") {
          return this.setState({
            isLoaded: true,
            isError: true,
            movies: []
          })
        }

        return this.setState({
          history: this.state.history.concat([{ query: query }]),
          step: this.state.step + 1,
          isLoaded: true,
          isError: false,
          movies: result.Search
        })
      })
      .catch(error => this.setState({
        isLoaded: true,
        isError: true
      }))
  }

  render() {
    const movies = this.state.movies
    return (
      <div className="Home">
        <Search
          onChange={query => this.searchQuery(query)}/>
        <ListMovie movies={movies}/>
      </div>
    )
  }
}

export default Home;
