import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const receiveProject = project => ({
	type: RECEIVE_PROJECT,
	project
});

export const receiveProjects = projects => ({
	type: RECEIVE_PROJECTS,
	projects
});

export const removeProject = project => ({
	type: REMOVE_PROJECT,
	project
})

export const receiveProjectErrors = errors => ({
	type: RECEIVE_PROJECT_ERRORS,
	errors
});

export const fetchProjects = () => dispatch => (
	APIUtil.fetchProjects().then(projects => (
		dispatch(receiveProjects(projects))
	), err => (
		dispatch(receiveProjectErrors(err.responseJSON))
	))
);

export const fetchProject = id => dispatch => (
	APIUtil.fetchProject(id).then(project => (
		dispatch(receiveProject(project))
	), err => (
		dispatch(receiveProjectErrors(err.responseJSON))
	))
)

export const createProject = project => dispatch => (
	APIUtil.createProject(project).then(project => (
		dispatch(receiveProject(project))
	), err => (
		dispatch(receiveProjectErrors(err.responseJSON))
	))
)

export const updateProject = project => dispatch => (
	APIUtil.updateProject(project).then(project => (
		dispatch(receiveProject(project))
	), err => (
		dispatch(receiveProjectErrors(err.responseJSONS))
	))
)

export const deleteProject = id => dispatch => (
	APIUtil.deleteProject(id).then(project => (
		dispatch(removeProject(project))
	), err => (
		dispatch(receiveProjectErrors(err.responseJSON))
	))
)
