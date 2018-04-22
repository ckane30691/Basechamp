import {connect} from 'react-redux';
import {
	createProject,
	updateProject,
	fetchProject
} from '../../actions/project_actions';
import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	let project = {title: "", description: ""};
	let shouldRender = false;
	if (ownProps.match.path === "/projects/new") {
		shouldRender = true;
	} else if (ownProps.match.path === "/projects/:projectId/edit") {
			project = state.entities.projects[ownProps.match.params.projectId];
			if (ownProps.renderId == ownProps.match.params.projectId) {
				shouldRender = true;
			}
		}
	return {project, shouldRender};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.match.path == "/projects/:projectId/edit" ?
		 'edit' :
		 'new';

	const processForm = (formType === 'new') ? createProject : updateProject;
	return {
		processForm: project => dispatch(processForm(project)),
		fetchProject: id => dispatch(fetchProject(id)),
		formType
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectForm));
