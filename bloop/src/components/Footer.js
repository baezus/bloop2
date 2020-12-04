import React, { Component } from 'react';
import { Switch, NavLink } from 'react-router-dom';

const Footer = () => {

  return(

    <Switch>
    <nav className="breadcrumb is-right is-large has-bullet-separator" aria-label="breadcrumbs">
      <ul className="nav-list">
        <li className="nav-link"><NavLink to="/" className="nav-link">Bloop</NavLink></li>
        <li><NavLink to="/users/login" className="nav-link">Log In</NavLink></li>
        <li><NavLink to="/users/signup" className="nav-link">Register</NavLink></li>
        <li><NavLink to="/profiles" className="nav-link">All Profiles</NavLink></li>
        <li><NavLink to="/profiles/new" className="nav-link">Add New Profile</NavLink></li>
      </ul>
    </nav>
    </Switch>
  )
}

export default Footer;