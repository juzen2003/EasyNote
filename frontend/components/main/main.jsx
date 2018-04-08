import React from 'react';
import NavSideBarContainer from '../nav_side_bar/nav_side_bar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import EditNoteFormContainer from '../notes/edit_note_form_container';
import CreateNoteFormContainer from '../notes/create_note_form_container';

class Main extends React.Component {
  componentDidMount() {
    // need to retrieve data again
  }

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
          <CreateNoteFormContainer />
        </div>
      </div>
    )
  }
}

export default Main;
