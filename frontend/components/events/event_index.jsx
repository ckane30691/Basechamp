import React from 'react';
// import EventIndexItem from './event_index_item';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
		this.props.fetchEvents(this.props.match.params.projectId)
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		return (
			<div className="todo-index-body">
				<Link className="project-title" to={`/projects/${this.props.match.params.projectId}`}>
					{title}
				</Link>
				<div className="todo-index-container">
					<h2 className="feature-header">Schedule</h2>
					<Calendar />
				</div>
			</div>
		)
	}
}

export default EventIndex;
