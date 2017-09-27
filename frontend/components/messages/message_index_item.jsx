import React from 'react';
import { Link } from 'react-router-dom';

const MessageIndexItem = ({message, deleteMessage, updateMessage, project, errors, currentUser}) => {
	const date = new Date(message.created_at);
	const edit = currentUser && currentUser.id === message.author_id ? <Link className="message-edit-btn" to={`/projects/${message.project_id}/messages/${message.id}/edit`}>Edit</Link> : ""
	const deleteBtn = currentUser && currentUser.id === message.author_id ? <button className="delete-project-btn" onClick={() => deleteMessage(message.id)}>X</button> : ""
	return (
		<div>
		<li>
			<h3 className="message-author">{message.author} • {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</h3>
			<Link className='message-title' to={`/projects/${message.project_id}/messages/${message.id}`}>
				{message.title} -
			</Link>
			<p className='message-body'> {message.body}</p>
			{edit}
			{deleteBtn}
		</li>
		</div>
	)
}

export default MessageIndexItem;
