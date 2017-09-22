export const fetchTodos = (projectId) => (
	$.ajax({
		method: 'GET',
		url: `api/projects/${projectId}/todos`
	})
);

export const fetchTodo = (id) => (
	$.ajax({
		method: 'GET',
		url: `api/todos/${id}`
	})
)

// NOTE not sure if below will work
export const createTodo = todo => (
	$.ajax({
		method: 'POST',
		url: `api/projects/${todo.project_id}/todos`,
		data: {todo}
	})
)

export const udpateTodo = todo => (
	$.ajax({
		method: 'PATCH',
		url: `api/todos/${todo.id}`,
		data: {todo}
	})
)

export const deleteTodo = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/todos/${id}`
	})
)
