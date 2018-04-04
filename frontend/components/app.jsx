import React from 'react';
import { Route } from 'react-router-dom';
import LogInFormContainer from './session_form/login_container';
import SignUpFormContainer from './session_form/signup_container';
import NavSideBarContainer from './nav_side_bar/nav_side_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
  <div>
    <AuthRoute exact path="/" component={LogInFormContainer} />
    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute path="/notes" component={NavSideBarContainer} />
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
