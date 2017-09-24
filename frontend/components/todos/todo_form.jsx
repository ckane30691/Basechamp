import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.todo
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if (this.props.match.params.todoId) {
			this.props.fetchTodo(this.props.match.params.todoId)
			this.props.fetchProject(this.props.match.params.projectId)
		} else {
			this.props.fetchProject(this.props.match.params.projectId)
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState(newProps.todo)
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state)
		.then(() => this.props.history.push(`/projects/${this.props.todo.project_id}/todos`))
	}

	render() {
		let todoTitle = this.props.todo ? this.state.title : "";
		let projectTitle = this.props.project ? this.props.project.title : "";
		let body = this.props.todo ? this.state.body : "";
		let indexPath = this.props.todo ? `/projects/${this.props.todo.project_id}/todos` : "";
		let projectPath = this.props.todo ? `/projects/${this.props.todo.project_id}` : "";
		return(
			<div className="todo-index-body">
				<Link to={projectPath} className="project-title">{projectTitle}</Link>
				<form className="todo-index-container" onSubmit={this.handleSubmit}>
					<Link to={indexPath} className="feature-header">To-dos</Link>
					<input className="todo-title-input" type="text"
						value={todoTitle}
						onChange={this.update('title')}
						placeholder="Name this to-do" />

					<br/>

					<textarea className="todo-body-input" type="text"
						value={body}
						onChange={this.update('body')}
						placeholder="Enter a description"/>

					<input className="todo-submit" type="submit" value="Add to todo" />
					<Link className="delete-project-btn" to={indexPath}>
						X
					</Link>
				</form>
		</div>
		)
	}
}

export default withRouter(TodoForm);
