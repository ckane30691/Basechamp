import { connect } from 'react-redux';
import TodoIndex from './todo_index';

import {
	fetchTodos,
	fetchTodo,
	createTodo,
	deleteTodo,
	updateTodo
} from '../../actions/todo_actions'

const mapStateToProps = (state, ownProps) => {
	const projectId = ownProps.match.params.projectId
	return {
		todos: Object.keys(state.entities.todos)
		.map(id => state.entities.todos[id]),
		projectId
	}
};

const mapDispatchToProps = dispatch => ({
	fetchTodos: projectId => dispatch(fetchTodos(projectId)),
	fetchTodo: id => dispatch(fetchTodo(id)),
	createTodo: todo => dispatch(createTodo(todo)),
	deleteTodo: id => dispatch(deleteTodo(id)),
	updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoIndex);
