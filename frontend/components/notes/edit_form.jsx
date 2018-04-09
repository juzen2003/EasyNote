import React from 'react';
import NoteForm from './note_form';
import { withRouter } from 'react-router-dom';

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.note.id !== undefined) && (this.props.match.params.noteId !== nextProps.match.params.noteId)) {
      this.props.fetchNote(nextProps.match.params.noteId);
      // this.setState(nextProps.note)
      // this.state = nextProps.note
      //
      // console.log("re-fetch?");
    }
    // debugger

  }

  render() {
    const { fetchNote, action, note} = this.props;
    // const note = this.state;
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
