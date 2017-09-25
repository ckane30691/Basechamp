import {
  RECEIVE_COMMENT_ERRORS,
  RECEIVE_COMMENT
} from '../actions/comment_actions';

const _nullErrors = [];

const CommentErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return _nullErrors;
    default:
      return state;
  }
};

export default CommentErrorsReducer;
