import React from 'react';

const Login = () => {
  return(
    
    <div>
      <form action="/login" method="POST">
        <div>
          <label>Username: </label>
          <input type="text" name="username"/>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password"/>
        </div>

        <div>
          <input type="submit" value="Log in!"/>
        </div>
      </form>
    </div>
  )
}

export default Login;