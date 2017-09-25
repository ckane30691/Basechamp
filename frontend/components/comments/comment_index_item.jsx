import React from 'react';
import { withRouter } from 'react-router-dom';

const CommentIndexItem = (props) => {

	const date = new Date(props.comment.created_at);
	return (
		<li>
			<h3>{props.comment.body}</h3>
			<h5 className="message-author">Posted on: {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()} by {props.comment.author}</h5>
			<br/>
			<button className="delete-project-btn" onClick={() => props.deleteComment(props.comment.id)}>X</button>
			<br/>
		</li>
	)
}



	export default withRouter(CommentIndexItem);
