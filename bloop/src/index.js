import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './components/redux/reducers'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const store = configureStore({ 
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider domain="baezus.us.auth0.com" clientId="53LqHodY2e1iH2XOVw7Bg6s8Vf2PQY15" redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


