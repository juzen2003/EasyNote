import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';

const entitiesReducer = combineReducers({
  notes: NotesReducer
});

export default entitiesReducer;
