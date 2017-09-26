import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import { fetchMessage, deleteMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import MessageShow from './message_show';

const mapStateToProps = (state, ownProps) => {
	const message = state.entities.messages[ownProps.match.params.messageId];
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		message,
		project,
		errors: state.errors.message
	};
};

const mapDispatchToProps = dispatch => ({
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchMessage: id => dispatch(fetchMessage(id)),
	deleteMessage: id => dispatch(deleteMessage(id))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageShow));
