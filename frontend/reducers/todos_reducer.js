import merge from 'lodash/merge';

import {
	RECEIVE_TODO,
	RECEIVE_TODOS,
	REMOVE_TODO,
} from '../actions/todo_actions';

const TodosReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_TODOS:
			return action.todos;
		case RECEIVE_TODO:
			newState[action.todo.id] = action.todo;
			return newState;
		case REMOVE_TODO:
			delete newState[action.todo.id];
			return newState;
		default:
				return state;
	}
};

export default TodosReducer;
