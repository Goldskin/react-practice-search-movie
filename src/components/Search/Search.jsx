import React, { Component } from 'react';
import './Search.css';

let timeout = null

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.query,
      doneTyping: true 
    }
  }

  handleChange (event) {
    event.preventDefault()

    if (!this.state.doneTyping) {
      clearTimeout(timeout)
    }

    this.setState({
      value: event.target.value,
      doneTyping: false
    })

    timeout = setTimeout(() => {
      this.setState({ doneTyping: true })
      this.props.onChange(this.state.value)
    }, 1000);

  }

  render() {
    return (
      <input value={this.state.value} type="text" onChange={(event) => this.handleChange(event)}/>
    )
  }
}

export default Search;
