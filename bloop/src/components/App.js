import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Passport from './Passport'
import Login from './LogIn'
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
            {/* <Route exact path="/" component={Index}/> */}
            {/* <Route exact path="/users" component={UsersPage}/>
            <Route exact path="/user/:userId" component={UserShowPage}/> */}
            {/* <Route exact path="/about" component={About}/> */}
            <Route exact path='/users/signup' component={Passport}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Passport}/>
            {/* <Route exact path='/dashboard' component={Dashboard}/> */}
            <Route exact path='/dashboard' component={Blah}/>
          </Switch>

</div>

{/* 
              <div className="hero-body">
                  <Blah />
              </div> */}






                <div className="hero-foot">
                   <Footer />
                </div>
          </section>
        </div>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Index}/> */}
            {/* <Route exact path="/users" component={UsersPage}/>
            <Route exact path="/user/:userId" component={UserShowPage}/> */}
            {/* <Route exact path="/about" component={About}/> */}
            <Route exact path='/users/signup' component={Passport}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/dashboard' component={Blah}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
