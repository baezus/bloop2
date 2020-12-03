import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Passport from './Passport';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import OneUser from './ShowUser';
import Dashboard from './Dashboard';
import Blah from './Blah';
import Header from './Header';
import Footer from './Footer';
import '../styles/bloop.scss'

class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="second-section">
          <section className="hero is-fullheight is-success has-background-pink second-section">
            <div className="hero-head">
              <Header/>
            </div>
            <div className="hero-body">
              <Switch>
                <Route exact path='/signup' component={Passport}/>
                <Route exact path='/login' component={LoginButton}/>
                <Route exact path='/user' component={OneUser}/>
                <Route exact path='/signup' component={Passport}/>
                <Route exact path='/bloop' component={Blah}/>
              </Switch>
            </div>
            <div className="hero-foot">
              <Footer />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App;
