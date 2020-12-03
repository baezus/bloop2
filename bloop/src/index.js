import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './components/redux/reducers'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const store = configureStore({ 
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Auth0ProviderWithHistory>

      <App />
   
    </Auth0ProviderWithHistory>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


