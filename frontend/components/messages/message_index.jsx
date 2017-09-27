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

		const extraBtn = this.props.messages && this.props.messages.length > 3 ?
		<Link className='new-message-button top-corner'
			to={`/projects/${this.props.match.params.projectId}/messages/new`}>
			Post a message
		</Link>
		: "";

		return (
			<div className="todo-index-body">
				<Link className="project-title" to={`/projects/${this.props.match.params.projectId}`}>
					{title}
				</Link>
				<div className="generic-index-container index-height">
					<Link className="back-btn" to={`/projects/${this.props.match.params.projectId}`}>↷</Link>

					{extraBtn}

					<Link className='new-message-button bottom-corner' to={`/projects/${this.props.match.params.projectId}/messages/new`}>
						Post a message
					</Link>
					<h2 className="feature-header">Message Board</h2>

					<ul className='generic-list'>
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
