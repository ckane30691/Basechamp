import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import {
	fetchProjects,
	fetchProject,
	createProject,
	deleteProject,
	updateProject
} from '../../actions/project_actions'

const mapStateToProps = state => {
	return {
		projects: Object.keys(state.entities.projects)
		.map(id => state.entities.projects[id])
	}
};

const mapDispatchToProps = dispatch => ({
	fetchProjects: () => dispatch(fetchProjects()),
	fetchProject: id => dispatch(fetchProject(id)),
	createProject: project => dispatch(createProject(project)),
	deleteProject: id => dispatch(deleteProject(id)),
	updateProject: project => dispatch(updateProject(project))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectIndex);
