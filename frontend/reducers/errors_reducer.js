import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import project from './project_errors_reducer';
import todo from './todo_errors_reducer';
import message from './message_errors_reducer';
import comment from './comment_errors_reducer';

export default combineReducers({
  session,
	project,
	todo,
	message,
	comment
});
