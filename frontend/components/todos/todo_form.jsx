import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.todo;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if (this.props.match.params.todoId) {
			this.props.fetchTodo(this.props.match.params.todoId)
		} else {
			this.props.fetchProject(this.props.match.params.projectId)
		}
	}

	componentWillReceiveProps(nextProps) {
		this.props.fetchProject(nextProps.todo.project_id)
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
		let title = this.props.todo ? this.state.title : "";
		let body = this.props.todo ? this.state.body : "";
		let path = this.props.todo ? `/projects/${this.props.todo.project_id}/todos` : "";
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						value={title}
						onChange={this.update('title')}
						placeholder="Name this to-do" />

					<br/>

					<input type="text"
						value={body}
						onChange={this.update('body')}
						placeholder="Enter a description"/>

					<input type="submit" value="Save" />
				</form>
				<Link to={path}>
					X
				</Link>
		</div>
		)
	}
}

export default withRouter(TodoForm);
