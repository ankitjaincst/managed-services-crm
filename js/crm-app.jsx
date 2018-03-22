import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private-route'
import AuthButton from './auth-button'
import Public from './public-page'
import Dashboard from './dashboard'
import Hubs from './hubs'
import Customers from './customers'
import Login from './login'
import Search from './search'
import Home from './home'
import FourOFour from './four-o-four'

const App = () => (
  <Router>
    <div>
      <AuthButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/hubs" component={Hubs} />
        <PrivateRoute exact path="/dashboard/customers" component={Customers} />
        <PrivateRoute exact path="/dashboard/search" component={Search} />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </Router>
)

render(<App />, document.getElementById('app'))
