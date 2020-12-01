import React, { useState, useEffect } from 'react'
import Footer from '../features/filters/Footer'
import AddProfile from '../features/profiles/AddProfile'
import VisibleProfileList from '../features/profiles/VisibleProfileList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import userAPI from '../apis/profileService'
import CreateProfile from './CreateProfile'
import '../styles/bloop.scss'

function App () {
  
  return (
    <Router>
    <div className="App">
      <div className="second-section">
        <section className="hero is-fullheight is-success has-background-pink second-section">
          <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <h1 className="title is-1">Bloop</h1><br/>
                    <h3 className="subtitle is-3">Who's out there?</h3>
                  </div>
                  <div className="column">
                    <nav className="breadcrumb is-right is-large has-bullet-separator" aria-label="breadcrumbs">
                      <ul>
                        <li className="nav-link"><Link to="/" className="nav-link">Bloop</Link></li>
                        <li><Link to="/users/login" className="nav-link">Log In</Link></li>
                        <li><Link to="/users/signup" className="nav-link">Register</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CreateProfile />
      </div>

      <div>
        <Switch>
          <Route exact path="/"/>
          <Route path='/users/signup' component={CreateProfile}/>
        </Switch>
      </div>
    </div>
  </Router>
  )
}


export default App;
