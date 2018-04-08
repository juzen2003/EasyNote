import React from 'react';
import NoteForm from './note_form';
import { withRouter } from 'react-router-dom';

class EditNoteForm extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.note.id != nextProps.match.params.noteId) {
      this.props.fetchNote(nextProps.match.params.noteId);
    }
  }

  render() {
    const { action, note } = this.props;
    return (
      <NoteForm
        action={action}
        note={note} />
    );
  }
}


export default withRouter(EditNoteForm);
