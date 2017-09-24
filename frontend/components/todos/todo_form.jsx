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
		let path = this.props.todo ? `/projects/${this.props.todo.project_id}/todos` : "";
		return(
			<div className="todo-index-body">
				<h2 className="project-title">{projectTitle}</h2>
				<form className="todo-index-container" onSubmit={this.handleSubmit}>
					<input className="todo-title-input" type="text"
						value={todoTitle}
						onChange={this.update('title')}
						placeholder="Name this to-do" />

					<br/>

					<input className="todo-body-input" type="text"
						value={body}
						onChange={this.update('body')}
						placeholder="Enter a description"/>

					<input className="todo-submit" type="submit" value="Add to todo" />
				</form>
				<Link to={path}>
					X
				</Link>
		</div>
		)
	}
}

export default withRouter(TodoForm);
