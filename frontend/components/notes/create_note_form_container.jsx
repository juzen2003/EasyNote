import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = state => ({
  note: {title:"", body:""}
})

const mapDispatchToProps = dispatch => ({
  createNote: (note) => dispatch(createNote(note)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);

 // 
 // {
 //     "3": {
 //         "id": 3,
 //         "title": "test3",
 //         "body": "test_body",
 //         "user_id": 8,
 //         "notebook_id": null
 //     }
 // }
