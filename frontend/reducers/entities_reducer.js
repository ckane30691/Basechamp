import { combineReducers } from 'redux';

import ProjectsReducer from './projects_reducer';
import TodosReducer from './todos_reducer';

export default combineReducers({
  projects: ProjectsReducer,
  todos: TodosReducer
});
