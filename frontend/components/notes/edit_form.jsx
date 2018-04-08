import React from 'react';
import NoteForm from './note_form';
import { withRouter } from 'react-router-dom';

class EditNoteForm extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if ((nextProps.note.id !== undefined) && (this.props.match.params.noteId !== nextProps.match.params.noteId)) {
      this.props.fetchNote(nextProps.match.params.noteId);
    }

  }

  render() {
    const { fetchNote, action, note } = this.props;
    // debugger
    return (
      <NoteForm
        fetchNote={fetchNote}
        action={action}
        note={note} />
    );
  }
}


export default withRouter(EditNoteForm);
