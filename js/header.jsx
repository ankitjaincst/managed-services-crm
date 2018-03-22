import React from 'react'

import { Link, Redirect } from 'react-router-dom'

class Header extends React.Component {
  constructor() {
    super()
    this.state = { searchValue: '', fireRedirect: false }
  }

  handleChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <div>
        <h2>Header</h2>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="/dashboard/hubs">Hubs</Link>
        </div>
        <div>
          <Link to="/dashboard/customers"> Customers </Link>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.searchValue}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        {fireRedirect && (
          <Redirect
            to={{
              pathname: '/dashboard/search',
              search: `?query=${this.state.searchValue}`
            }}
          />
        )}
      </div>
    )
  }
}

export default Header
