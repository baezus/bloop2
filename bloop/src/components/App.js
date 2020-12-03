import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Passport from './Passport'
import Login from './LogIn'
import Dashboard from './Dashboard';
import Blah from './Blah';
import '../styles/bloop.scss'


class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="second-section">
          <section className="hero is-fullheight is-success has-background-pink second-section">
            <div className="hero-head">
                
                  <div className="columns is-centered">
                    <div className="column">
                      <h1 className="title">Bloop</h1>
                      <h3 className="subtitle is-3">Who's out there?</h3>
                        
                    </div>
                    </div>
                  </div>
                    <div className="hero-body">
                    <div className="column is-half">

                      <Blah />
                    </div>
                    </div>
                    <div className="hero-foot">
                      <nav className="breadcrumb is-right is-large has-bullet-separator" aria-label="breadcrumbs">
                        <ul className="nav-list">
                          <li className="nav-link"><Link to="/" className="nav-link">Bloop</Link></li>
                          <li><Link to="/users/login" className="nav-link">Log In</Link></li>
                          <li><Link to="/users/signup" className="nav-link">Register</Link></li>
                        </ul>
                      </nav>
                      
                  
               
              </div>
            </section>
        </div>

        <div>
          <Switch>
            <Route exact path="/"/>
            <Route exact path='/users/signup' component={Passport}/>
            <Route exact path='/users/login' component={Login}/>
            
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/dashboard' component={Blah}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
