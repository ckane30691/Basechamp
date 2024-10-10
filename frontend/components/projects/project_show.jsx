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
							<img className="generic-show-img" src="/assets/checkmark-icon-998c1ccc5794e500de0be4f1ecf7e76eae8b51f9a771446b19cccbff665063fe.png" />
							<p className="generic-show-desc">Make lists of work that needs to get done.</p>
						</div>
					</Link>

					<Link to={`/projects/${this.props.match.params.projectId}/messages`}>
						<div className="generic-show-container">
								<p  className="generic-show-title">Message Board</p>
							<hr />
							<img className="generic-show-img" src="/assets/messages-icon-fbe9c0239371813dd3b4eb03fa1009849be07bfb91ebb5cf1751d8b7434c12eb.png" />
							<p className="generic-show-desc">Post announcements, pitch ideas, & keep feedback on topic</p>
						</div>
				 </Link>

				 <Link to={`/projects/${this.props.match.params.projectId}/events`}>
					<div className="generic-show-container">
						<h1 className="generic-show-title">Events</h1>
						<hr />
						<img className="generic-show-img" src="/assets/calendar-icon-dd508f65e70599e8d8ce0b2d567271b137162ccb49c11df372b3e2d5109b9d52.png" />
						<p className="generic-show-desc">Set important dates on a shared schedule</p>
					</div>
				</Link>
				</div>


				<div className="show-footer">
					<hr/>
					<img className="icon" src="/assets/basecamp-icon-3a50735ad25100f6c456731f315e4a6d6f3ca6b9896968065c8b4a7851336a91.svg"/>
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
