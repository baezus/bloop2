import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthService } from '@auth0/auth0-react';

const AuthStatus = withRouter(({ history }) => (
  AuthService.isAuthenticated ? (
    <p>
      Welcome! <button onClick={()=>{
        AuthService.logout(() => history.push('/'))
      }}>Sign Out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default AuthStatus;