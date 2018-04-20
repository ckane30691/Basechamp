import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event, deleteEvent, updateEvent, currentUser}) => {
	const createdDate = new Date(event.created_at);

	const startDate = new Date(event.start_date);
	startDate.setDate(startDate.getDate() + 1);
	const endDate = new Date(event.end_date);
	endDate.setDate(endDate.getDate() + 1);

	const edit = currentUser && currentUser.id === event.author_id ?
		<Link className="event-edit-btn evt-idx"
			to={`/projects/${event.project_id}/events/${event.id}/edit`}>
			Edit
		</Link>
		: "";

	const deleteBtn = currentUser && currentUser.id === event.author_id ?
		<button className="delete-event-btn"
			onClick={() => deleteEvent(event.id)}>
			X
		</button>
		: "";

	return (
		<div>
		<li>
			{edit}
			<p className="event-title">
				{startDate.toString().split(" ").slice(0, 1).join(" ")},&nbsp;
				{startDate.toString().split(" ").slice(1,2).join(" ")}&nbsp;
				{startDate.toString().split(" ").slice(2,3).join(" ")}&nbsp;
			</p>
			<Link className='event-title title' to={`/projects/${event.project_id}/events/${event.id}`}>
				{event.title}
			</Link>
			<h4 className='event-body'>{event.body}</h4>
			{deleteBtn}
			<h4 className="event-dates">
				{(startDate.getMonth() + 1) + "/" + startDate.getDate()  + "/" + startDate.getFullYear()}
				- {(endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear()}
			</h4>
			<h3 className="event-author">Posted by: {event.author} • {(createdDate.getMonth() + 1) + "/" + createdDate.getDate() + "/" + createdDate.getFullYear()}</h3>
		</li>
		</div>
	);
};

export default EventIndexItem;
