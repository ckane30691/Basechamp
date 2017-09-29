import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MessageForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.message;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if (this.props.match.params.messageId) {
			this.props.fetchMessage(this.props.match.params.messageId)
			this.props.fetchProject(this.props.match.params.projectId)
		} else {
			this.props.fetchProject(this.props.match.params.projectId)
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState(newProps.message)
	}

	componentDidMount() {
		$("#test").focus()
		$("#test").get(0).setSelectionRange(0,0)
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state)
		.then(() => this.props.history.push(`/projects/${this.props.message.project_id}/messages`))
	}

	render() {
		let messageTitle = this.props.message ? this.state.title : "";
		let projectTitle = this.props.project ? this.props.project.title : "";
		let body = this.props.message ? this.state.body : "";
		let indexPath = `/projects/${this.props.match.params.projectId}/messages`;
		let projectPath = `/projects/${this.props.match.params.projectId}`;

		return (
			<div className='todo-index-body'>
				<Link to={projectPath} className="project-title">{projectTitle}</Link>
				<form className="generic-index-container flex-start" onSubmit={this.handleSubmit}>
					<Link to={indexPath} className="feature-header">Messages</Link>

					<input id="test" required className={`message-title-input message-${this.props.formType}`} type="text"
						value={messageTitle}
						onChange={this.update('title')}
						placeholder="Title..." />



					<textarea required className={`message-body-input message-${this.props.formType}`} type="text"
						value={body}
						onChange={this.update('body')}
						placeholder="Write away..."/>

					<input className="message-submit" type="submit" value="Post this message" />
					<Link className="back-btn" to={indexPath}>
						↷
					</Link>

				</form>
			</div>
		)
	}

}

export default withRouter(MessageForm);
