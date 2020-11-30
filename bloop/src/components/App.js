import React, { useState, useEffect } from 'react'
import Footer from '../features/filters/Footer'
import AddProfile from '../features/profiles/AddProfile'
import VisibleProfileList from '../features/profiles/VisibleProfileList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import userAPI from '../apis/profileService'
import CreateProfile from './CreateProfile'

function App () {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    if (!profiles) {
      getProfiles();
    }
  })

  const getProfiles = async () => {
    let res = await userAPI();
    console.log(res);
    setProfiles(res);
  }

  const renderProfile = profile => {
    return (
      <li key={profile._id} className="list__item profile">
        <h3 className="profile__name">{profile.name}</h3>
        <p className="profile__email">{profile.email}</p>
      </li>
    );
  };
  
  return (
    <Router>
    <div className="App">
      <ul>

        <li>
          <Link className="nav-link" to={"/create-user"}>Create User</Link>
        </li>

      </ul>

      <div>
        <Switch>
          <Route exact path='/' component={CreateProfile}/>
          <Route path='/create-user' component={CreateProfile}/>
         
        </Switch>
      </div>
    </div>
  </Router>
  )
}


export default App;
