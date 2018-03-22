import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
    <div>
      <Link to="/login">LogIn</Link>
    </div>
    <div>
      <Link to="/public"> Public Page </Link>
    </div>
  </div>
)

export default Home
