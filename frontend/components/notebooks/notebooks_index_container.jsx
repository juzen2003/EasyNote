import React from 'react';
import NotebooksIndex from './notebooks_index';
import { connect, withRouter } from 'react-redux';
import { fetchAllNotebooks, deleteNotebook, fetchNotebook } from '../../actions/notebook_actions'

const mapStateToProps = state => ({
  notebooks: Object.values(state.entities.notebooks)
});

// Need to add more here
const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
