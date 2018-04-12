import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditNoteForm from './edit_form';
import { fetchNote, updateNote } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';

function getTagsName(state, note) {
  const tagsID = note.tagsID;
  const tags = state.entities.tags.filter((tag) => tagsID.includes(tag.id));
  return tags.map(tag => tag.name);
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  const defaultNote = {title:"", body:"", body_with_style:"", notebook_id:null, tagsID: []}
  const note = state.entities.notes[ownProps.match.params.noteId] || defaultNote;
  const notebooks = state.entities.notebooks;
  const formType = "Edit form"

  // debugger
  return { note, notebooks, formType };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
  action: (note) => dispatch(updateNote(note)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteForm));
