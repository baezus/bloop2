import React, { Component } from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Passport from './Passport';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import OneUser from './ShowUser';
import Dashboard from './Dashboard';
import Blah from './Blah';
import Header from './Header';
import Footer from './Footer';
import '../styles/bloop.scss';
import { useAuth0 } from '@auth0/auth0-react';
import routes from '../config/routes';
import ProfileList from '../pages/ProfileList';

function App () {

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div> oops... {error.message}</div>;
  }

  return (

      <div className="App">
        <div className="second-section">
          <section className="hero is-fullheight is-success has-background-pink second-section">
            <div className="hero-head">
              <Header/>
              <OneUser/>
            </div>
            <div className="hero-body">
              {/* <AuthStatus/> */}
              <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/bloop'>Bloop</Link></li>
              </ul>
          
              { routes }
              <Switch>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/profiles' component={ProfileList}/>
                <Route exact path='/user' component={OneUser}/>
                <Route exact path='/login' component={LoginButton}/>
                <Route exact path='/signup' component={Passport}/>
                <Route exact path='/bloop' render={(props) => (
                  <Blah {...props} user={user}/>)}/>
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


export default App;
