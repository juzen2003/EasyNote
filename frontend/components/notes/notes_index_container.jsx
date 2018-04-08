import React from 'react';
import NotesIndex from './notes_index';
import { connect, withRouter } from 'react-redux';
import { fetchAllNotes, deleteNote, fetchNote } from '../../actions/note_actions'

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes)
});

// Need to add more here
const mapDispatchToProps = dispatch => ({
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  deleteNote: (id) => dispatch(deleteNote(id)),
  fetchNote: (id) => dispatch(fetchNote(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
