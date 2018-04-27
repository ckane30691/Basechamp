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
				<div className="todo-show-container">
						<Link
							className="back-btn"
							to={`/projects/${this.props.match.params.projectId}/todos`}>
							↷
						</Link>
						<Link
							className="feature-header"
							to={`/projects/${this.props.match.params.projectId}/todos`}>
							To-do
						</Link>
						<div className="todo-show">
						<h3>{todo.title}</h3>
						<p>{todo.body}</p>
					</div>
					<Link className="todo-show-edit-btn"
						to={`/projects/${this.props.match.params.projectId}/todos/${this.props.match.params.todoId}/edit`}>
						Edit
					</Link>
				</div>
			</div>
		);
	}

}

export default TodoShow;
