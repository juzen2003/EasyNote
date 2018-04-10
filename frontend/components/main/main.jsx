import React from 'react';
import NavSideBarContainer from '../nav_side_bar/nav_side_bar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import EditNoteFormContainer from '../notes/edit_note_form_container';
import CreateNoteFormContainer from '../notes/create_note_form_container';
import { fetchAllNotes, fetchNote } from '../../actions/note_actions'


class Main extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.selectFrom = this.selectFrom.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // debugger
  }
  componentDidMount() {
    // debugger
  }

  selectFrom() {
    if(this.props.match.params.noteId) {
      return <EditNoteFormContainer />
    } else {
      return <CreateNoteFormContainer />
    }
  }


  render () {
      // debugger
    return (
      <div className="main-page">
        <nav className="nav-side-bar-area">
          <NavSideBarContainer />
        </nav>
        <div className="notes-index-area">
          <NotesIndexContainer />
        </div>
        <div className="notes-editing-area">
          {this.selectFrom()}
        </div>
      </div>
    )
  }
}

export default Main;
