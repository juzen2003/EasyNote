import React from 'react';
import { Route } from 'react-router-dom';
import LogInFormContainer from './session_form/login_container_form'


const App = () => (
  <div>
    <h1>EasyNote App</h1>
    <Route exact path="/login" component={LogInFormContainer} />
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
