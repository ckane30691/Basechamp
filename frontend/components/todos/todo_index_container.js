import { connect } from 'react-redux';
import TodoIndex from './todo_index';
import {fetchProject} from '../../actions/project_actions';

import {
	fetchTodos,
	fetchTodo,
	createTodo,
	deleteTodo,
	updateTodo
} from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		todos: Object.keys(state.entities.todos)
		.map(id => state.entities.todos[id]),
		project
	}
};

const mapDispatchToProps = dispatch => ({
	fetchTodos: projectId => dispatch(fetchTodos(projectId)),
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchTodo: id => dispatch(fetchTodo(id)),
	createTodo: todo => dispatch(createTodo(todo)),
	deleteTodo: id => dispatch(deleteTodo(id)),
	updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoIndex);
