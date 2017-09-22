import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
	}

	render() {

		return (
			<div className="project-show-body">
				<div className="generic-show-container">
					<Link className="generic-show-title" to={`/projects/${this.props.match.params.projectId}/todos`}>
						To-dos
					</Link>
					<hr/>
					<img className="generic-show-img" src="https://s3-us-west-1.amazonaws.com/basechamp/checkmark.png" />
					<p className="generic-show-desc">Make lists of work that needs to get done.</p>
				</div>

				<div className="generic-show-container">
					<h1 className="generic-show-title">Comming Soon</h1>
					<hr />
					<img className="generic-show-img" src="https://s3-us-west-1.amazonaws.com/basechamp/todos_icon.png" />
				</div>

				<div className="generic-show-container">
					<h1 className="generic-show-title">Comming Soon</h1>
					<hr />
					<img className="generic-show-img" src="https://s3-us-west-1.amazonaws.com/basechamp/calendar_icon.png" />
				</div>

			</div>
		)
	}
}

export default ProjectShow;
