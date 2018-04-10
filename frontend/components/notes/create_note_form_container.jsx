import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { createNote } from '../../actions/note_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions'

const mapStateToProps = state => {
  // debugger;
  return {
    note: {title:"", body:"", body_with_style:"", notebook_id:null},
    notebooks: state.entities.notebooks,
  }

}

const mapDispatchToProps = dispatch => ({
  action: (note) => dispatch(createNote(note)),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);

 //
 // {
 //         "id": 3,
 //         "title": "test3",
 //         "body": "test_body",
 //         "body_with_style": "<p>body_with_style</p>",
 //         "user_id": 8,
 //         "notebook_id": null

 // }
 //
