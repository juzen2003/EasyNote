import React from 'react';
import { Route } from 'react-router-dom';
import LogInFormContainer from './session_form/login_container';
import SignUpFormContainer from './session_form/signup_container';
import NavSideBarContainer from './nav_side_bar/nav_side_bar_container';



const App = () => (
  <div>
    <header>
      <h1>EasyNote App</h1>
    </header>
    <Route exact path="/" component={LogInFormContainer} />
    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
    <Route path="/notes" component={NavSideBarContainer} />
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
