import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import { fetchMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import MessageShow from './message_show';

const mapStateToProps = (state, ownProps) => {
	const message = state.entities.messages[ownProps.match.params.messageId];
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		message,
		project
	};
};

const mapDispatchToProps = dispatch => ({
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchMessage: id => dispatch(fetchMessage(id)),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageShow));
