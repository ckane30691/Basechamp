
import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import SessionErrorsReducer from './session_errors_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  errors: SessionErrorsReducer
});

export default RootReducer;
