import {
  RECEIVE_MESSAGE_ERRORS,
  RECEIVE_MESSAGE
} from '../actions/message_actions';

const _nullErrors = [];

const MessageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;
    case RECEIVE_MESSAGE:
      return _nullErrors;
    default:
      return state;
  }
};

export default MessageErrorsReducer;
