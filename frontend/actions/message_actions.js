import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveMessages = messages => ({
	type: RECEIVE_MESSAGES,
	messages
});

export const receiveMessage = message => ({
	type: RECEIVE_MESSAGE,
	message
});

export const removeMessage = message => ({
	type: REMOVE_MESSAGE,
	message
});

export const receiveMessageErrors = errors => ({
	type: RECEIVE_MESSAGE_ERRORS,
	errors
});

export const fetchMessages = projectId => dispatch => (
	APIUtil.fetchMessages(projectId).then(messages => (
		dispatch(receiveMessages(messages))
	), err => (
		dispatch(receiveMessageErrors(err.responseJSON))
	))
)

export const fetchMessage = id => dispatch => (
	APIUtil.fetchMessage(id).then(message => (
		dispatch(receiveMessage(message))
	), err => (
		dispatch(receiveMessageErrors(err.responseJSON))
	))
)

export const createMessage = message => dispatch => (
	APIUtil.createMessage(message).then(message => (
		dispatch(receiveMessage(message))
	), err => (
		dispatch(receiveMessageErrors(err.responseJSON))
	))
)

export const updateMessage = message => dispatch => (
	APIUtil.updateMessage(message).then(message => (
		dispatch(receiveMessage(message))
	), err => (
		dispatch(receiveMessageErrors(err.responseJSON))
	))
)

export const deleteMessage = id => dispatch => (
	APIUtil.deleteMessage(id).then(message => (
		dispatch(removeMessage(message))
	), err => (
		dispatch(receiveMessageErrors(err.responseJSON))
	))
)
