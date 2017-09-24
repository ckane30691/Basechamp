import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import { fetchTodo } from '../../actions/todo_actions';
import TodoShow from './todo_show';

const mapStateToProps = (state, ownProps) => {
	const todo = state.entities.todos[ownProps.match.params.todoId];
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		todo,
		project
	};
};

const mapDispatchToProps = dispatch => ({
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchTodo: id => dispatch(fetchTodo(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoShow);
