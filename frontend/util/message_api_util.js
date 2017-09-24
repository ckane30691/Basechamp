export const fetchMessages = projectId => (
	$.ajax({
		method: 'GET',
		url: `api/projects/${projectId}/messages`
	})
)

export const fetchMessage = id => (
	$.ajax({
		method: 'GET',
		url: `api/messages/${id}`
	})
)

export const createMessage = message => (
	$.ajax({
		method: 'POST',
		url: `api/projects/${message.project_id}/messages`,
		data: {message}
	})
)

export const updateMessage = message => (
	$.ajax({
		method: 'PATCH',
		url: `api/messages/${message.id}`,
		data: {message}
	})
)

export const deleteMessage = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/messages/${id}`
	})
)
