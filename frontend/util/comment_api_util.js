export const fetchComments = messageId => (
	$.ajax({
		method: 'GET',
		url: `api/messages/${messageId}/comments`
	})
);

export const createComment = comment => (
	$.ajax({
		method: 'POST',
		url: `api/messages/${comment.message_id}/comments`,
		data: {comment}
	})
);

export const deleteComment = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/comments/${id}`
	})
)
