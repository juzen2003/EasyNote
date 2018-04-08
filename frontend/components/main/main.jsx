import React from 'react';
import NavSideBarContainer from '../nav_side_bar/nav_side_bar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import EditNoteContainer from '../notes/edit_note_form_container';

class Main extends React.Component {
  render () {
    return (
      <div className="main-page">
        <nav className="nav-side-bar-area">
          <NavSideBarContainer />
        </nav>
        <div className="notes-index-area">
          <NotesIndexContainer />
        </div>
        <div className="notes-editing-area">
          <p>Edit Area</p>
        </div>
      </div>
    )
  }
}

export default Main;
