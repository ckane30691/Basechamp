import React from 'react';
import { Link } from 'react-router-dom';

class TodoShow extends React.Component {

	componentDidMount() {
		this.props.fetchTodo(this.props.match.params.todoId);
		this.props.fetchProject(this.props.match.params.projectId);
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		const todo = this.props.todo ? this.props.todo : {title: "", body: ""};
		return (
			<div className="todo-index-body">
				<Link
					className="project-title"
					to={`/projects/${this.props.match.params.projectId}`}>
					{title}
				</Link>
				<div className="todo-index-container">
						<Link
							className="delete-project-btn"
							to={`/projects/${this.props.match.params.projectId}/todos`}>
							X
						</Link>
						<Link
							className="feature-header"
							to={`/projects/${this.props.match.params.projectId}/todos`}>
							To-do
						</Link>
						<Link
							to={`/projects/${this.props.match.params.projectId}/todos/${this.props.match.params.todoId}/edit`}>
							Edit
						</Link>
						<h3>{todo.title}</h3>
						<p>{todo.body}</p>
				</div>
			</div>
		)
	}

}

export default TodoShow;
