import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProjectIndexItem = ({ project, router, deleteProject, updateProject, history}) => {
	return (
		<li>
			<Link to={`/projects/${project.id}`}>
				{project.title}
			</Link>
			<hr/>
			<p className="project-desc">{project.description}</p>

			<button
				className="delete-project-btn"
				onClick={() => deleteProject(project.id)}>
				X
			</button>
			<Link className="edit-project-btn" to={`/projects/${project.id}/edit`}>
				Edit
			</Link>
		</li>
	);
};

export default withRouter(ProjectIndexItem)
