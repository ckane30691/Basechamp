import {
  RECEIVE_PROJECT_ERRORS,
  RECEIVE_PROJECT
} from '../actions/project_actions';

const _nullErrors = [];

const ProjectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_PROJECT:
      return _nullErrors;
    default:
      return state;
  }
};

export default ProjectErrorsReducer;
