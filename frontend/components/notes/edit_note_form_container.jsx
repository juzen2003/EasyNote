import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditNoteForm from './edit_form';
import { fetchNote, updateNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const defaultNote = {title:"", body:"", body_with_style:""}
  const note = state.entities.notes[ownProps.match.params.noteId] || defaultNote;

  // debugger
  return { note };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: (note) => dispatch(fetchNote(note)),
  action: (note) => dispatch(updateNote(note))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteForm));
