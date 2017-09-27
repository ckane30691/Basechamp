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
			className="event-edit-btn"
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
				<div className="event-show-container">
						<Link
							className="back-btn"
							to={`/projects/${this.props.match.params.projectId}/events`}>
							↷
						</Link>
						<Link
							className="feature-header"
							to={`/projects/${this.props.match.params.projectId}/events`}>
							Event
						</Link>
						<div className="event-show">
							{edit}
							<div className="event-info">
							<h3>{event.title}</h3>
							<p>{event.body}</p>
							<h4>Event Ends: {endDate.toString().split(" ").slice(0,3).join(" ")}</h4>
							</div>
							<div className="date-container">
								<div className="date-header">
									{startDate.toString().split(" ").slice(1,2).join(" ")}
								</div>
								<h1>{startDate.toString().split(" ").slice(2,3).join(" ")}</h1>
								{startDate.toString().split(" ").slice(0,1).join(" ")}
							</div>
								<br/>
								<h3 className="event-show-author">Posted By: {event.author} • {(createdDate.getMonth() + 1) + "/" + createdDate.getDate() + "/" + createdDate.getFullYear()}</h3>
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
