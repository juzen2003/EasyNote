import React from 'react';
import ReactDOM from 'react-dom';

import {login, signUp, logout} from './actions/util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to EasyNote</h1>, root);

  window.login = login;
  window.logout = logout;
  window.signUp = signUp;
});
