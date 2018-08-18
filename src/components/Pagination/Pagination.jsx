import React, { Component } from 'react';
import './Pagination.css';
import classnames from 'classnames'

class Pagination extends Component {
  total () {
    return Math.ceil(this.props.result / this.props.limit)
  }

  page (index, sentence = null) {
    const classes = classnames(
      'page-item',
      { 'active': this.props.current === index }
    )
    return (
      <li className={classes} key={index}>
        <button className="page-link" onClick={() => this.props.onClick(index)}>{sentence ? sentence : index}</button>
      </li>
    )
  }

  pages () {
    const page = []
    const total = this.total()
    let before = false
    let after = false

    for (let index = 1; index <= total; index++) {
      if (index < this.props.current - 10 && !before) {
        before = true
        page.push(this.page(1, 'beginning'))
      }

      if (index >= this.props.current - 10 && index <= this.props.current + 10) {
        page.push(this.page(index))
      }

      if (index > this.props.current + 10 && !after) {
        after = true
        page.push(this.page(total, 'end'))
      }
    }

    return page
  }

  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {this.props.result == 0 ? '' : this.pages()}
        </ul>
      </nav>
    )
  }
}

export default Pagination;
