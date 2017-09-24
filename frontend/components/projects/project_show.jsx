import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
	}

	render() {
		const title = this.props.project ? this.props.project.title : ""
		return (
			<div>
				<div className="project-show-body">
					<h1 className='project-title'>{title}</h1>
					<br/>
					<div className="generic-show-container">
						<Link className="generic-show-title" to={`/projects/${this.props.match.params.projectId}/todos`}>
							To-dos
						</Link>
						<hr/>
						<img className="generic-show-img" src="https://s3-us-west-1.amazonaws.com/basechamp/checkmark.png" />
						<p className="generic-show-desc">Make lists of work that needs to get done.</p>
					</div>

					<div className="generic-show-container">
						<Link to={`/projects/${this.props.match.params.projectId}/messages`} className="generic-show-title">
							Message Board
						</Link>
						<hr />
						<img className="generic-show-img" src="https://s3-us-west-1.amazonaws.com/basechamp/todos_icon.png" />
						<p className="generic-show-desc">Post announcements, pitch ideas, & keep feedback on topic</p>
					</div>

					<div className="generic-show-container">
						<h1 className="generic-show-title">Coming Soon</h1>
						<hr />
						<img className="generic-show-img" src="https://s3-us-west-1.amazonaws.com/basechamp/calendar_icon.png" />
					</div>
				</div>


				<div className="show-footer">
					<hr/>
					<img className="icon" src="https://s3-us-west-1.amazonaws.com/basechamp/basecamp_icon.svg"/>
					<h4 className="footer-title">Welcome to {title}!</h4>
					<p className="footer-desc">
						This is the place to do everything related to this project
						— make plans, discuss progress, and get work done.
					</p>
					<h6 className="happy-basechamping">Happy Basechamping!</h6>
				</div>
		</div>
		)
	}
}

export default ProjectShow;
