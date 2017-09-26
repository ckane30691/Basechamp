import { connect } from 'react-redux';
import MessageIndex from './message_index';
import {fetchProject} from '../../actions/project_actions';

import {
	fetchMessages,
	deleteMessage,
} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		messages: Object.keys(state.entities.messages)
		.map(id => state.entities.messages[id]),
		project,
		errors: state.errors.message,
		currentUser: state.session.currentUser
	}
};

const mapDispatchToProps = dispatch => ({
	fetchMessages: projectId => dispatch(fetchMessages(projectId)),
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	deleteMessage: id => dispatch(deleteMessage(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageIndex);
