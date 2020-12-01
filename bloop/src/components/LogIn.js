import React from 'react';

const Login = () => {

  return(
    <div>
      <form action="/users/login" method="POST">
        <div>
          <label>Name: </label>
          <input type="text" name="name"/>
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