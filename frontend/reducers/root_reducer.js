
import { combineReducers } from 'redux';

import session from './session_reducer';
import SessionErrorsReducer from './session_errors_reducer';

const RootReducer = combineReducers({
  session,
  errors: SessionErrorsReducer
});

export default RootReducer;
