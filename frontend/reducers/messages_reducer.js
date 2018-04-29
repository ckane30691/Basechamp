import merge from 'lodash/merge';

import {
	RECEIVE_MESSAGES,
	RECEIVE_MESSAGE,
	REMOVE_MESSAGE
} from '../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_MESSAGES:
			return action.messages;
		case RECEIVE_MESSAGE:
			newState[action.message.id] = action.message;
			return newState;
		case REMOVE_MESSAGE:
			delete newState[action.message.id];
			return newState;
		default:
			return state;
	}
};

export default MessagesReducer;
