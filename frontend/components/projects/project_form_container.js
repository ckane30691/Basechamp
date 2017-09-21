import {connect} from 'react-redux';
import {createProject} from '../../actions/project_actions';
import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
	project: {title: "", description: ""}
});

const mapDispatchToProps = dispatch => ({
	createProject: project => dispatch(createProject(project))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectForm));
