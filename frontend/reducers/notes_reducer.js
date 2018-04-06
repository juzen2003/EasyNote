import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
} from '../actions/note_actions';
import merge from 'lodash/merge';

const NotesReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      // remove merging oldState to avoid caching previous users notes
      return merge({}, action.notes);
    case RECEIVE_NOTE:
      return merge({}, oldState, {[action.note.id]: action.note});
    case REMOVE_NOTE:
      const newState = merge({}, oldState);
      delete newState[action.noteId];
      return newState;
    default:
      return oldState;
  }
};

export default NotesReducer;
