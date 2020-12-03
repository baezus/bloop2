import React, { Component } from 'react';
import { Switch, NavLink } from 'react-router-dom';

const Footer = () => {

  return (
    
    <Switch>
       <div className="columns is-centered">
          <div className="column">
            <h1 className="title">Bloop</h1>
            <h3 className="subtitle is-3">Is anyone there?</h3>  
          </div>
        </div>
    </Switch>
  )
}

export default Footer;