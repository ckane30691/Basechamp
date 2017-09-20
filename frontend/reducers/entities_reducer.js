import { combineReducers } from 'redux';

import ProjectsReducer from './projects_reducer';

export default combineReducers({
  projects: ProjectsReducer
});
