import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.event;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if (this.props.match.params.eventId) {
			this.props.fetchEvent(this.props.match.params.eventId)
			this.props.fetchProject(this.props.match.params.projectId)
		} else {
			this.props.fetchProject(this.props.match.params.projectId)
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState(newProps.event)
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state)
		.then(() => this.props.history.push(`/projects/${this.props.event.project_id}/events`))
	}

	render() {
		let eventTitle = this.props.event ? this.state.title : "";
		let projectTitle = this.props.project ? this.props.project.title : "";
		let body = this.props.event ? this.state.body : "";
		let indexPath = `/projects/${this.props.match.params.projectId}/events`;
		let projectPath = `/projects/${this.props.match.params.projectId}`;
		let startDate = this.props.event ? this.state.start_date : "";
		let endDate = this.props.event ? this.state.end_date : "";

		return (
			<div className="todo-index-body">
				<Link to={projectPath} className="project-title">{projectTitle}</Link>
				<form className="todo-index-container" onSubmit={this.handleSubmit}>
					<Link to={indexPath} className="feature-header">Events</Link>

					<input required className="event-title-input" type="text"
						value={eventTitle}
						onChange={this.update('title')}
						placeholder="What's the event?" />

					<label> Starts:

						<input
							className="starts-input"
							type="date"
							value={startDate}
							onChange={this.update('start_date')}
							/>
					</label>
					<br/>

					<label> Ends:

						<input
							className="ends-input"
							type="date"
							value={endDate}
							onChange={this.update('end_date')}
							/>
					</label>

					<label> Notes:
						<textarea type="text"
							className="notes-input"
							value={body}
							onChange={this.update('body')}
							placeholder="Add any notes..."/>
					</label>

					<input className="message-submit" type="submit" value="Post this event" />
					<Link className="delete-project-btn" to={indexPath}>
						X
					</Link>

				</form>
			</div>
		)
	}

}

export default withRouter(EventForm);
