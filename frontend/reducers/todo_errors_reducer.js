import {
  RECEIVE_TODO_ERRORS,
  RECEIVE_TODO
} from '../actions/todo_actions';

const _nullErrors = [];

const TodoErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO_ERRORS:
      return action.errors;
    case RECEIVE_TODO:
      return _nullErrors;
    default:
      return state;
  }
};

export default TodoErrorsReducer;
