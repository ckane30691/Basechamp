import { connect } from 'react-redux';
import MessageIndex from './message_index';
import {fetchProject} from '../../actions/project_actions';

import {
	fetchMessages,
	fetchMessage,
	createMessage,
	deleteMessage,
	updateMessage
} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		messages: Object.keys(state.entities.messages)
		.map(id => state.entities.messages[id]),
		project
	}
};

const mapDispatchToProps = dispatch => ({
	fetchMessages: projectId => dispatch(fetchMessages(projectId)),
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchMessage: id => dispatch(fetchMessage(id)),
	createMessage: message => dispatch(createMessage(message)),
	deleteMessage: id => dispatch(deleteMessage(id)),
	updateMessage: message => dispatch(updateMessage(message))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageIndex);
