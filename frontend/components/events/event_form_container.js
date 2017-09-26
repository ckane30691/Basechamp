import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import {
	createEvent,
	updateEvent,
	fetchEvent
} from '../../actions/event_actions';
import EventForm from './event_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	let event = {title: "", body: "", start_date: "", end_date: "", project_id: ownProps.match.params.projectId};
	let project = state.entities.projects[ownProps.match.params.projectId];
	if (ownProps.match.params.eventId) {
		event = state.entities.events[ownProps.match.params.eventId]
	}
	return {
		project,
		event
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.match.path == "/projects/:projectId/events/:eventId/edit" ?
		'edit' :
		'new';
	let processForm = (formType === 'new') ? createEvent : updateEvent;
	return {
		processForm: event => dispatch(processForm(event)),
		fetchEvent: id => dispatch(fetchEvent(id)),
		fetchProject: id => dispatch(fetchProject(id))
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(EventForm))
