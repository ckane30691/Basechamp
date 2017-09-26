import React from 'react';
import { Link } from 'react-router-dom';

const MessageIndexItem = ({message, deleteMessage, updateMessage, project, errors}) => {
	const date = new Date(message.created_at);
	return (
		<li>
			<h3 className="message-author">{message.author} • {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</h3>
			<Link className='todo-title' to={`/projects/${message.project_id}/messages/${message.id}`}>
				{message.title}
			</Link>
			<h4 className='todo-body'>{message.body}</h4>
			<p className="errors">{errors}</p>
			<button className="delete-project-btn" onClick={() => deleteMessage(message.id)}>X</button>
			<Link className="todo-edit-btn" to={`/projects/${message.project_id}/messages/${message.id}/edit`}>Edit</Link>
		</li>
	)
}

export default MessageIndexItem;
