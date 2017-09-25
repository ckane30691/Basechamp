import React from 'react';
import { withRouter } from 'react-router-dom';

const CommentIndexItem = (props) => {

	// const date = new Date(comment.created_at);
	// debugger
	return (
		<li>
			<h4>{props.comment.body}</h4>
			{props.comment.author}
			{props.comment.created_at}
			<br/>
			<button onClick={() => props.deleteComment(props.comment.id)}>Delete</button>
			<br/>
		</li>
	)
}



	export default withRouter(CommentIndexItem);
