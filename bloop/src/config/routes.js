import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProfileList from '../pages/ProfileList';
import ProfileShow from '../pages/ProfileShow';
import NewProfile from '../pages/NewProfile';
import UpdateProfile from '../pages/UpdateProfile';

export default (
  <Switch>
    <Route exact path='/' component = { Home } />
    <Route exact path='/profiles' component = { ProfileList }/>
    <Route path='/profiles/new' component={ NewProfile }/>
    <Route exact path='/profiles/:id/edit' component={ UpdateProfile }/>
    <Route path='/profiles/:id' component={ ProfileShow }/>
  </Switch>
);