import React from 'react';
import MessageIndexItem from './message_index_item';
import { Link } from 'react-router-dom';

class MessageIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProject(this.props.match.params.projectId)
		this.props.fetchMessages(this.props.match.params.projectId)
	}

	render() {
		const title = this.props.project ? this.props.project.title : "";
		return (
			<div className="todo-index-body">
				<Link className="project-title" to={`/projects/${this.props.match.params.projectId}`}>
					{title}
				</Link>
				<div className="todo-index-container">
					<Link className="delete-project-btn" to={`/projects/${this.props.match.params.projectId}`}>X</Link>

					<Link className='new-todo-button' to={`/projects/${this.props.match.params.projectId}/messages/new`}>
						Post a message
					</Link>
					<h2 className="feature-header">Message Board</h2>

					<ul className='todo-list'>
						{
							this.props.messages.map(message => (
								<MessageIndexItem
									key={message.id}
									deleteMessage={this.props.deleteMessage}
									updateMessage={this.props.updateMessage}
									project={this.props.project}
									currentUser={this.props.currentUser}
									message={message} />
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default MessageIndex;
