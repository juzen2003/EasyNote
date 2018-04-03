import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'

// import {login, signup, logout} from './util/session_api_util'
import {login, logout, signup} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to EasyNote</h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
