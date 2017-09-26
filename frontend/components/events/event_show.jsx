import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {

	componentDidMount() {
		this.props.fetchEvent(this.props.match.params.eventId);
		this.props.fetchProject(this.props.match.params.projectId);
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		const event = this.props.event ? this.props.event : {title: "", body: "", start_date: "", end_date: ""};
		const createdDate = this.props.event ? new Date(this.props.event.created_at) : new Date("");
		const edit = this.props.currentUser && this.props.event &&
		this.props.currentUser.id === this.props.event.author_id ?
		<Link
			className="todo-edit-btn"
			to={`/projects/${event.project_id}/events/${event.id}/edit`}>
			Edit
		</Link> :
		"";
		const startDate = new Date(event.start_date);
		const endDate = new Date(event.end_date);

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
							to={`/projects/${this.props.match.params.projectId}/events`}>
							X
						</Link>
						<Link
							className="feature-header"
							to={`/projects/${this.props.match.params.projectId}/events`}>
							Event
						</Link>
						<div className="message-show">
							{edit}
							<h3 className="event-author">{event.author} • {(createdDate.getMonth() + 1) + "/" + createdDate.getDate() + "/" + createdDate.getFullYear()}</h3>
							<h3>{event.title}</h3>
							<p>{event.body}</p>
							<h4>Event starts: {(startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear()}</h4>
							<h4>Event Ends: {(endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear()}</h4>
								<br/>
								<ul>
									{this.props.errors.map((error, idx) => (
										<li className="errors" key={`error-${idx}`}>
											{error}
										</li>
									))}
								</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default EventShow;
