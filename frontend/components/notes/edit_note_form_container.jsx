import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditNoteForm from './edit_form';
import { fetchNote, updateNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultNote = {title:"", body:"", body_with_style:""}
  // debugger
  const note = state.entities.notes[ownProps.match.params.noteId] || defaultNote;

  return { note };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: (note) => dispatch(fetchNote(note)),
  action: (note) => dispatch(updateNote(note))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteForm);
