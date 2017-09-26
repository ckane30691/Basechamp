import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveEvents = events => ({
	type: RECEIVE_EVENTS,
	events
});

export const receiveEvent = event => ({
	type: RECEIVE_EVENT,
	event
});

export const removeEvent = event => ({
	type: REMOVE_EVENT,
	event
});

export const receiveEventErrors = errors => ({
	type: RECEIVE_EVENT_ERRORS,
	errors
});

export const fetchEvents = projectId => dispatch => (
	APIUtil.fetchEvents(projectId).then(events => (
		dispatch(receiveEvents(events))
	), err => (
		dispatch(receiveEventErrors(err.responseJSON))
	))
)

export const fetchEvent = id => dispatch => (
	APIUtil.fetchEvent(id).then(event => (
		dispatch(receiveEvent(event))
	), err => (
		dispatch(receiveEventErrors(err.responseJSON))
	))
)

export const createEvent = event => dispatch => (
	APIUtil.createEvent(event).then(event => (
		dispatch(receiveEvent(event))
	), err => (
		dispatch(receiveEventErrors(err.responseJSON))
	))
)

export const updateEvent = event => dispatch => (
	APIUtil.updateEvent(event).then(event => (
		dispatch(receiveEvent(event))
	), err => (
		dispatch(receiveEventErrors(err.responseJSON))
	))
)

export const deleteEvent = id => dispatch => (
	APIUtil.deleteEvent(id).then(event => (
		dispatch(receiveEvent(event))
	), err => (
		dispatch(receiveEventErrors(err.responseJSON))
	))
)
