import { combineReducers } from 'redux';

import ProjectsReducer from './projects_reducer';
import TodosReducer from './todos_reducer';
import MessagesReducer from './messages_reducer';
import CommentsReducer from './comments_reducer';
import EventsReducer from './events_reducer';

export default combineReducers({
  projects: ProjectsReducer,
  todos: TodosReducer,
  messages: MessagesReducer,
  comments: CommentsReducer,
  events: EventsReducer
});
