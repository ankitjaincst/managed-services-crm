import React from 'react'
import queryString from 'query-string'

import Header from './header'

class Search extends React.Component {
  render() {
    console.log(queryString.parse(this.props.location.search))
    return (
      <div>
        <Header />
        <h3> This is search results </h3>
      </div>
    )
  }
}

export default Search
