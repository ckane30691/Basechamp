import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		return (
			<div>
				<div className="project-show-body">
					<h1 className='project-title'>{title}</h1>
					<br/>
					<Link to={`/projects/${this.props.match.params.projectId}/todos`}>
						<div className="generic-show-container">
								<p className="generic-show-title">To-dos</p>
							<hr/>
							<img className="generic-show-img" src="/assets/checkmark-icon.png" />
							<p className="generic-show-desc">Make lists of work that needs to get done.</p>
						</div>
					</Link>

					<Link to={`/projects/${this.props.match.params.projectId}/messages`}>
						<div className="generic-show-container">
								<p  className="generic-show-title">Message Board</p>
							<hr />
							<img className="generic-show-img" src="/assets/messages-icon.png" />
							<p className="generic-show-desc">Post announcements, pitch ideas, & keep feedback on topic</p>
						</div>
				 </Link>

				 <Link to={`/projects/${this.props.match.params.projectId}/events`}>
					<div className="generic-show-container">
						<h1 className="generic-show-title">Events</h1>
						<hr />
						<img className="generic-show-img" src="/assets/calendar-icon.png" />
						<p className="generic-show-desc">Set important dates on a shared schedule</p>
					</div>
				</Link>
				</div>


				<div className="show-footer">
					<hr/>
					<img className="icon" src="/assets/basecamp-icon.png"/>
					<h4 className="footer-title">Welcome to {title}!</h4>
					<p className="footer-desc">
						This is the place to do everything related to this project
						— make plans, discuss progress, and get work done.
					</p>
					<h6 className="happy-basechamping">Happy Basechamping!</h6>
				</div>
		</div>
		);
	}
}

export default ProjectShow;
