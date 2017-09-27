import React from 'react';
import { Link } from 'react-router-dom';

class MessageShow extends React.Component {

	componentDidMount() {
		this.props.fetchMessage(this.props.match.params.messageId);
		this.props.fetchProject(this.props.match.params.projectId);
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		const message = this.props.message ? this.props.message : {title: "", body: ""};
		const date = this.props.message ? new Date(this.props.message.created_at) : new Date("");
		const edit = this.props.currentUser && this.props.message &&
		this.props.currentUser.id === this.props.message.author_id ?
		<Link
			className="message-edit-btn"
			to={`/projects/${message.project_id}/messages/${message.id}/edit`}>
			Edit
		</Link> :
		"";

		return (
			<div className="todo-index-body">
				<Link
					className="project-title"
					to={`/projects/${this.props.match.params.projectId}`}>
					{title}
				</Link>
				<div className="generic-index-container index-height">
						<Link
							className="back-btn"
							to={`/projects/${this.props.match.params.projectId}/messages`}>
							↷
						</Link>
						<Link
							className="feature-header"
							to={`/projects/${this.props.match.params.projectId}/messages`}>
							Message
						</Link>
						<div className="message-show">
							{edit}
							<h3 className="message-author">{message.author} • {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}</h3>
							<h3>{message.title}</h3>
							<p>{message.body}</p>
								<br/>
								<ul>
									{this.props.errors.map((error, idx) => (
										<li className="errors" key={`error-${idx}`}>
											{error}
										</li>
									))}
								</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MessageShow;
