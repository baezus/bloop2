import React, { useState, useEffect } from 'react'
import Footer from '../features/filters/Footer'
import AddProfile from '../features/profiles/AddProfile'
import VisibleProfileList from '../features/profiles/VisibleProfileList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import userAPI from '../apis/profileService'
import CreateProfile from './CreateProfile'
import '../styles/bloop.scss'

function App () {
  const [profiles, setProfiles] = useState();

  // useEffect(() => {
  //   if (!profiles) {
  //     getProfiles();
  //   }
  // })

  // const getProfiles = async () => {
  //   let res = await userAPI();
  //   console.log(res);
  //   setProfiles(res);
  // }

  // const renderProfile = profile => {
  //   return (
  //     <li key={profile._id} className="list__item profile">
  //       <h3 className="profile__name">{profile.name}</h3>
  //       <p className="profile__email">{profile.email}</p>
  //     </li>
  //   );
  // };
  
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
      </div>

      <div>
        <Switch>
          <Route exact path='/' component={CreateProfile}/>
          <Route path='/users/signup' component={CreateProfile}/>
        </Switch>
      </div>
    </div>
  </Router>
  )
}


export default App;
