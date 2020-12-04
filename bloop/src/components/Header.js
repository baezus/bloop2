import React, { Component } from 'react';
import { Switch, NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = () => {

  return (

    
       <div className="columns is-centered">
          <div className="column">
            <h1 className="title">Bloop</h1>
            <h3 className="subtitle is-3">Is anyone there?</h3>
            {/* <LogoutButton/>  
            <LoginButton /> */}
          </div>
        </div>
    
  )
}

export default Header;