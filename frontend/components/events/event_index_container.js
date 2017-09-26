import { connect } from 'react-redux';
import EventIndex from './event_index';
import {fetchProject} from '../../actions/project_actions';

import {
	fetchEvents,
	deleteEvent
} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
	const project = state.entities.projects[ownProps.match.params.projectId]
	return {
		events: Object.keys(state.entities.events)
		.map(id => state.entities.events[id]),
		project,
		errors: state.errors.event,
		currentUser: state.session.currentUser
	}
};

const mapDispatchToProps = dispatch => ({
	fetchEvents: projectId => dispatch(fetchEvents(projectId)),
	fetchProject: projectId => dispatch(fetchProject(projectId)),
	fetchEvent: id => dispatch(fetchEvent(id)),
	deleteEvent: id => dispatch(deleteEvent(id)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventIndex);
