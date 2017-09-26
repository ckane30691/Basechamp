import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event, deleteEvent, updateEvent, currentUser}) => {
	const createdDate = new Date(event.created_at);
	const startDate = new Date(event.start_date);
	const endDate = new Date(event.end_date);

	const edit = currentUser && currentUser.id === event.author_id ? <Link className="todo-edit-btn" to={`/projects/${event.project_id}/events/${event.id}/edit`}>Edit</Link> : ""
	const deleteBtn = currentUser && currentUser.id === event.author_id ? <button className="delete-project-btn" onClick={() => deleteEvent(event.id)}>X</button> : ""
	return (
		<div>
		<li>
			<h3 className="event-author">{event.author} • {(createdDate.getMonth() + 1) + "/" + createdDate.getDate() + "/" + createdDate.getFullYear()}</h3>
			<Link className='todo-title' to={`/projects/${event.project_id}/events/${event.id}`}>
				{event.title}
			</Link>
			<h4 className='todo-body'>{event.body}</h4>
			{edit}
			{deleteBtn}
			<h4>Event starts: {(startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear()}</h4>
			<h4>Event Ends: {(endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear()}</h4>
		</li>
		</div>
	)
}

export default EventIndexItem;
