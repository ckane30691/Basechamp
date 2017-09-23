import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions'
import {
	createTodo,
	updateTodo,
	fetchTodo,
} from '../../actions/todo_actions';
import TodoForm from './todo_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	if (ownProps.match.params.projectId) {
		let todo = {title: "", body: "", project_id: ownProps.match.params.projectId};
		let project = state.entities.projects[ownProps.match.params.projectId];
		return {
			project,
			todo
		}
	} else if (ownProps.match.params.todoId) {
		let todo = state.entities.todos[ownProps.match.params.todoId];
		let project = state.entities.project
		return {
			project,
			todo
		}
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.match.path == "/todos/:todoId/edit" ?
		 'edit' :
		 'new';
	let processForm = (formType === 'new') ? createTodo : updateTodo;
	return {
		processForm: todo => dispatch(processForm(todo)),
		fetchTodo: id => dispatch(fetchTodo(id)),
		fetchProject: id => dispatch(fetchProject(id))
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoForm));
