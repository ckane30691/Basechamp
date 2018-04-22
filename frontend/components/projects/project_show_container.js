import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShow from './project_show';


const mapStateToProps = (state, ownProps) => {
	const projectId = ownProps.match.params.projectId;
	return {
		project: state.entities.projects[projectId]
	};
};

const mapDispatchToProps = dispatch => ({
	fetchProject: id => dispatch(fetchProject(id))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectShow);
