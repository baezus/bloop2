import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// const store = configureStore({ 
//   reducer: rootReducer
// })

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);


