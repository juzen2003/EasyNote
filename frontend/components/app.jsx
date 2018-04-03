import React from 'react';
import { Route } from 'react-router-dom';
import LogInFormContainer from './session_form/login_container'
import SignUpFormContainer from './session_form/signup_container'


const App = () => (
  <div>
    <h1>EasyNote App</h1>
    <Route exact path="/login" component={LogInFormContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;


// import {
//   Route,
//   Redirect,
//   Switch,
//   Link,
//   HashRouter
// } from 'react-router-dom';
