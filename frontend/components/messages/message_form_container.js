import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import {
	createMessage,
	updateMessage,
	fetchMessage
} from '../../actions/message_actions';
import MessageForm from './message_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	let message = {title: "", body: "", project_id: ownProps.match.params.projectId};
	let project = state.entities.projects[ownProps.match.params.projectId];
	if (ownProps.match.params.messageId) {
		message = state.entities.messages[ownProps.match.params.messageId];
	}
	return {
		project,
		message
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.match.path == "/projects/:projectId/messages/:messageId/edit" ?
		'edit' :
		'new';
	let processForm = (formType === 'new') ? createMessage : updateMessage;
	return {
		processForm: message => dispatch(processForm(message)),
		fetchMessage: id => dispatch(fetchMessage(id)),
		fetchProject: id => dispatch(fetchProject(id)),
		formType
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageForm))
