import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import Root from './components/root';

// import {createNotebook, updateNotebook, fetchNotebook, fetchAllNotebooks, deleteNotebook} from './util/notebook_api_util'
// import {createNotebook, updateNotebook, fetchNotebook, fetchAllNotebooks, deleteNotebook} from './actions/notebook_actions'
// import {login, logout, signup} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store = undefined;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.createNotebook = createNotebook;
  // window.fetchNotebook = fetchNotebook;
  // window.fetchAllNotebooks = fetchAllNotebooks;
  // window.updateNotebook = updateNotebook;
  // window.deleteNotebook = deleteNotebook;
});
