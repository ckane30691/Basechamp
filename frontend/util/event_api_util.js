export const fetchEvents = projectId => (
	$.ajax({
		method: 'GET',
		url: `api/projects/${projectId}/events`
	})
)

export const fetchEvent = id => (
	$.ajax({
		method: 'GET',
		url: `api/events/${id}`
	})
)

export const createEvent = event => (
	$.ajax({
		method: 'POST',
		url: `api/projects/${event.project_id}/events`,
		data: {event}
	})
)

export const updateEvent = event => (
	$.ajax({
		method: 'PATCH',
		url: `api/events/${event.id}`,
		data: {event}
	})
)

export const deleteEvent = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/events/${id}`
	})
)
