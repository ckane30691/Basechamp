import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
	const event = state.entities.events[ownProps.match.params.eventId];
	const project = state.entities.projects[ownProps.match.params.projectId];
	return {
		event,
		project,
		errors: state.errors.event,
		currentUser: state.session.currentUser
	};
};

const mapDispatchToProps = dispatch => ({
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchEvent: id => dispatch(fetchEvent(id)),
	deleteEvent: id => dispatch(deleteEvent(id))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(EventShow));
