import merge from 'lodash/merge';

import {
	RECEIVE_COMMENTS,
	REMOVE_COMMENT
} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_COMMENTS:
			return action.comments;
		case REMOVE_COMMENT:
			delete newState[action.comment.id];
			return newState;
		default:
			return state;
	}
}

export default CommentsReducer;
