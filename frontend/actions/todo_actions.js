import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODO_ERRORS = "RECEIVE_TODO_ERRORS";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodo = todo => ({
	type: RECEIVE_TODO,
	todo
});

export const receiveTodos = todos => ({
	type: RECEIVE_TODOS,
	todos
});

export const removeTodo = todo => ({
	type: REMOVE_TODO,
	todo
});

export const receiveTodoErrors = errors => ({
	type: RECEIVE_TODO_ERRORS,
	errors
});

export const fetchTodos = projectId => dispatch => (
	APIUtil.fetchTodos(projectId).then(todos => (
		dispatch(receiveTodos(todos))
	), err => (
		dispatch(receiveTodoErrors(err.responseJSON))
	))
)

export const fetchTodo = id => dispatch => (
	APIUtil.fetchTodo(id).then(todo => (
		dispatch(receiveTodo(todo))
	), err => (
		dispatch(receiveTodoErrors(err.responseJSON))
	))
)

export const createTodo = todo => dispatch => (
	APIUtil.createTodo(todo).then(todo => (
		dispatch(receiveTodo(todo))
	), err => (
		dispatch(receiveTodoErrors(err.responseJSON))
	))
)

export const udpateTodo = todo => dispatch => (
	APIUtil.updateTodo(todo).then(todo => (
		dispatch(receiveTodo(todo))
	), err => (
		dispatch(receiveTodoErrors(err.responseJSON))
	))
)

export const deleteTodo = id => dispatch => (
	APIUtil.deleteTodo(id).then(todo => (
		dispatch(removeTodo(todo))
	), err => (
		dispatch(receiveTodoErrors(err.responseJSON))
	))
)
