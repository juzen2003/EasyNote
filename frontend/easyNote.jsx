import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import Root from './components/root';

// import {createNote, updateNote, fetchNote, fetchAllNotes, deleteNote} from './util/note_api_util'
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
  // window.createNote = createNote;
  // window.fetchNote = fetchNote;
  // window.fetchAllNotes = fetchAllNotes;
  // window.updateNote = updateNote;
  // window.deleteNote = deleteNote;
});
