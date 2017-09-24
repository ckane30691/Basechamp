import React from 'react';
import { Link } from 'react-router-dom';

class TodoShow extends React.Component {

	componentDidMount() {
		this.props.fetchTodo(this.props.match.params.projectId);
		this.props.fetchProject(this.props.match.params.todoId);
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		const todo = this.props.todo ? this.props.todo : {title: "", body: ""};
		return (
			<div>
				<div>
					<Link
						to={`/projects/${this.props.match.params.projectId}`}>
						{title}
					</Link>
					<div>
						<Link to={`/projects/${this.props.match.params.projectId}/todos`}>
							To-dos
						</Link>
						<h3>{todo.title}</h3>
						<p>{todo.body}</p>
					</div>
				</div>
			</div>
		)
	}

}

export default TodoShow;
