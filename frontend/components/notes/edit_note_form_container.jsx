import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditNoteForm from './edit_form';
import { fetchNote, updateNote } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const defaultNote = {title:"", body:"", body_with_style:"",  notebook_id:null}
  const note = state.entities.notes[ownProps.match.params.noteId] || defaultNote;
  const notebooks = state.entities.notebooks;

  // debugger
  return { note, notebooks };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
  action: (note) => dispatch(updateNote(note)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteForm));
