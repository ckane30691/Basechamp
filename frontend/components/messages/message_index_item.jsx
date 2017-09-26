import React from 'react';
import { Link } from 'react-router-dom';

const MessageIndexItem = ({message, deleteMessage, updateMessage, project, errors}) => {
	const date = new Date(message.created_at);
	return (
		<div>
		<li>
			<h3 className="message-author">{message.author} • {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</h3>
			<Link className='todo-title' to={`/projects/${message.project_id}/messages/${message.id}`}>
				{message.title}
			</Link>
			<h4 className='todo-body'>{message.body}</h4>
			<Link className="todo-edit-btn" to={`/projects/${message.project_id}/messages/${message.id}/edit`}>Edit</Link>
		</li>
		</div>
	)
}

export default MessageIndexItem;
