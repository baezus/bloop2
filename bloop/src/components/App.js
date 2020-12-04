import React, { Component } from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Passport from './Passport';
// import LoginPage from './LoginPage';
// import AuthStatus from './AuthStatus';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import OneUser from './ShowUser';
import Dashboard from './Dashboard';
import Blah from './Blah';
import Header from './Header';
import Footer from './Footer';
import '../styles/bloop.scss';
import { useAuth0 } from '@auth0/auth0-react';

// const AuthService = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true 
//     setTimeout(cb, 100)
//   },
//   logout(cb) {
//     this.isAuthenticated = false 
//     setTimeout(cb, 100)
//   }
// };

// const AuthStatus = withRouter(({ history }) => (
//   AuthService.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={()=>{
//         AuthService.logout(() => history.push('/'))
//       }}>Sign Out</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ));

// const SecretRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     AuthService.isAuthenticated === true
//     ? <Component {...props} />
//     : <Redirect to={{
//       pathname: '/login',
//       state: { from: props.location }
//     }} />
//   )}/>
// );

// class LoginPage extends React.Component { 
//   state = {
//     redirectToPreviousRoute: false
//   };

//   // login = () => {
//   //   AuthService.authenticate(() => {
//   //     this.setState({ redirectToPreviousRoute: true });
//   //   });
//   // };

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" }};
//     const { redirectToPreviousRoute } = this.state;

//     if (redirectToPreviousRoute) {
//       return <Redirect to={from}/>;
//     }

//     return (
//       <div>
//         <p>You must be logged in to view the page at {from.pathname}</p>
//         <LoginButton/>
//       </div>
//     );
//   }
// }





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
          

              <Switch>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/signup' component={Passport}/>
                {/* <Route exact path='/login' component={LoginPage}/> */}
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


export default App;
