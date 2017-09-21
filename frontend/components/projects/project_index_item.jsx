import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProjectIndexItem = ({ project, router, deleteProject, history}) => {
	return (
		<li>
			<Link to={`/projects/${project.id}`}>
				{project.title}
			</Link>

			<button
				className="delete-project-btn"
				onClick={() => deleteProject(project.id)}>
				X
			</button>
		</li>
	);
};

export default withRouter(ProjectIndexItem)
