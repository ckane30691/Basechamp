import merge from 'lodash/merge';

import {
	RECEIVE_PROJECTS,
	RECEIVE_PROJECT,
	REMOVE_PROJECT
} from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);

	switch (action.type) {
		case RECEIVE_PROJECTS:
			return action.projects;
		case RECEIVE_PROJECT:
			newState[action.project.id] = action.project
			return newState
		case REMOVE_PROJECT:
			delete newState[action.project.id]
			return newState
		default:
			return state;
	}
}

export default ProjectsReducer;
