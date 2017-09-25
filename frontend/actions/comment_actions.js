import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
	type: RECEIVE_COMMENTS,
	comments
})

export const receiveComment = comment => ({
	type: RECEIVE_COMMENT,
	comment
})

export const removeComment = comment => ({
	type: REMOVE_COMMENT,
	comment
})

export const receiveCommentErrors = errors => ({
	type: RECEIVE_COMMENT_ERRORS,
	errors
})

export const fetchComments = messageId => dispatch => (
	APIUtil.fetchComments(messageId).then(comments => (
		dispatch(receiveComments(comments))
	), err => (
		dispatch(receiveCommentErrors(err.responseJSON))
	))
)

export const createComment = comment => dispatch => (
	APIUtil.createComment(comment).then(comment => (
		dispatch(receiveComment(comment))
	), err => (
		dispatch(receiveCommentErrors(err.responseJSON))
	))
)

export const deleteComment = id => dispatch => (
	APIUtil.deleteComment(id).then(comment => (
		dispatch(removeComment(comment))
	), err => (
		dispatch(receiveCommentErrors(err.responseJSON))
	))
)
