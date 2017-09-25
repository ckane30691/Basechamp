import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';

class MessageShow extends React.Component {

	componentDidMount() {
		this.props.fetchMessage(this.props.match.params.messageId);
		this.props.fetchProject(this.props.match.params.projectId);
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		const message = this.props.message ? this.props.message : {title: "", body: ""};
		const date = this.props.message ? new Date(this.props.message.created_at) : new Date("");

		return (
			<div className="todo-index-body">
				<Link
					className="project-title"
					to={`/projects/${this.props.match.params.projectId}`}>
					{title}
				</Link>
				<div className="todo-index-container">
						<Link
							className="delete-project-btn"
							to={`/projects/${this.props.match.params.projectId}/messages`}>
							X
						</Link>
						<Link
							className="feature-header"
							to={`/projects/${this.props.match.params.projectId}/messages`}>
							Message
						</Link>
						<div className="message-show">
							<Link className="todo-edit-btn"
								to={`/projects/${this.props.match.params.projectId}/messages/${this.props.match.params.messageId}/edit`}>
								Edit
							</Link>
							<h3 className="message-author">{message.author} • {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</h3>
							<h3>{message.title}</h3>
							<p>{message.body}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default MessageShow;
