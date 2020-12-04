import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import LoginButton from './LoginButton';

const Footer = () => {

  return(

    <nav className="breadcrumb is-right is-large has-bullet-separator" aria-label="breadcrumbs">
      <ul className="nav-list">
        <li className="nav-link"><NavLink to="/bloop" className="nav-link">Bloop</NavLink></li>
        {/* <li className="nav-link"><NavLink to="/login" className="nav-link">Log In</NavLink></li> */}
        <li className="nav-link"><NavLink to="/profiles" className="nav-link">All Profiles</NavLink></li>
        <li className="nav-link"><NavLink to="/profiles/new" className="nav-link">Add New Profile</NavLink></li>
      </ul>
    </nav>

  )
}

export default Footer;