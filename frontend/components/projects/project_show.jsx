import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
	}

	render() {

		return (
			<div className="todo-link-container">
				<Link to={`/projects/${this.props.project.id}/todos`}>
					To-dos
				</Link>
				<hr/>
				<img src="https://s3-us-west-1.amazonaws.com/basechamp/todos_icon.png" />
				<p>Make lists of work that needs to get done.</p>
			</div>
		)
	}
}

export default ProjectShow;
