import React from 'react';
import NotesIndex from './notes_index';
import { connect } from 'react-redux';
import { fetchAllNotes } from '../../actions/note_actions'

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes)
});

// Need to add more here
const mapDispatchToProps = dispatch => ({
  fetchAllNotes: () => dispatch(fetchAllNotes())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
