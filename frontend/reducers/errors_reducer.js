import { combineReducers } from 'redux';
import errorsSessionReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  session: errorsSessionReducer
});

export default errorsReducer;
