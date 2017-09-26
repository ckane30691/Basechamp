import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event, deleteEvent, updateEvent, currentUser}) => {
	const date = new Date(event.created_at);
	const edit = currentUser && currentUser.id === event.author_id ? <Link className="todo-edit-btn" to={`/projects/${event.project_id}/events/${event.id}/edit`}>Edit</Link> : ""
	const deleteBtn = currentUser && currentUser.id === event.author_id ? <button className="delete-project-btn" onClick={() => deleteEvent(event.id)}>X</button> : ""
	return (
		<div>
		<li>
			<h3 className="event-author">{event.author} • {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</h3>
			<Link className='todo-title' to={`/projects/${event.project_id}/events/${event.id}`}>
				{event.title}
			</Link>
			<h4 className='todo-body'>{event.body}</h4>
			{edit}
			{deleteBtn}
		</li>
		</div>
	)
}

export default EventIndexItem;
