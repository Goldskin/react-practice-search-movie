import React, { Component } from 'react';
import './Home.css';
import Search from '../Search/Search';
import { API_ROOT } from '../../config/api';
import ListMovie from '../ListMovie/ListMovie';
import Pagination from '../Pagination/Pagination';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.search ? this.props.search : '',
      isLoaded: true,
      isError: false,
      movies: [],
      page: this.props.page
    }
  }

  componentWillMount () {
    this.mounted = true
    this.searchQuery(this.state.query, this.props.page)
  }

  componentWillUnmount () {
    this.mounted = false
  }

  updateQuery (query) {
    this.searchQuery(query)
  }

  updatePage (page) {
    this.searchQuery(this.state.query, page)
  }

  searchQuery (query, page = 1) {
    this.setState({isLoaded: false})

    fetch(`${API_ROOT}&s=${query}&page=${page}`)
      .then(res => res.json())
      .then(result => {
        if (result.Response === "False") {
          return {
            query: query,
            isLoaded: true,
            isError: true,
            movies: [],
            total: 0,
            page: 1
          }
        }

        return {
          query: query,
          isLoaded: true,
          isError: false,
          movies: result.Search,
          total: parseInt(result.totalResults),
          page: parseInt(page)
        }
      })
      .catch(error => ({
        isLoaded: true,
        isError: true
      }))
      .then(state => {
        if (this.mounted) {
          this.setState(state)
        }
      })
  }

  render() {
    const movies = this.state.movies

    if (!this.state.isLoaded) {
      return (
        <div className="Home">
          <Search
            query={this.state.query}
            onChange={query => this.updateQuery(query)} />
          <div>loading...</div>
        </div>
      )
    }

    
    return (
      <div className="Home">
        <Search
          query={this.state.query}
          onChange={query => this.updateQuery(query)}/>
        <Pagination
          limit={10}
          result={this.state.total}
          current={this.state.page}
          onClick={index => this.updatePage(index)} />
        <ListMovie movies={movies}/>
        <Pagination
          limit={10}
          result={this.state.total}
          current={this.state.page}
          onClick={index => this.updatePage(index)} />
      </div>
    )
  }
}

export default Home;
