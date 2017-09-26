import React from 'react';
import EventIndexItem from './event_index_item';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
		this.props.fetchEvents(this.props.match.params.projectId)
	}

	mapEventsToCalendar() {
		return ({date, view}) => (
			this.props.events.map(event => {
				const startDate = new Date(event.start_date);
				return(
					view === 'month' && date.getFullYear() == startDate.getFullYear()
					&& (date.getMonth() == startDate.getMonth())
					&& (date.getDate() == startDate.getDate()) ? <div>•</div> : null
				)
			})
		)
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
					<Link className='new-todo-button' to={`/projects/${this.props.match.params.projectId}/events/new`}>
						Create an event
					</Link>
					<Calendar
						minDate={new Date('01/01/1991')}
						minDetail={"year"}
						onChange={value => alert(`Selected date is, ${value}`)}
						renderChildren={this.mapEventsToCalendar()} />
					<ul className='todo-list'>
						{
							this.props.events.map(event => (
								<EventIndexItem
									key={event.id}
									deleteEvent={this.props.deleteEvent}
									updateEvent={this.props.updateEvent}
									currentUser={this.props.currentUser}
									event={event} />
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default EventIndex;
