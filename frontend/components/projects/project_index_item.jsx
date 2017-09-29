import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Draggable from 'react-draggable';

const ProjectIndexItem = ({ project, deleteProject, updateProject, history}) => {
	return (
		<Draggable>
		<li>
			<Link className='project-link' to={`/projects/${project.id}`}>
				{project.title}
			<hr/>
			<p className="project-desc">{project.description}</p>
		</Link>

			<button
				className="delete-project-btn"
				onClick={() => deleteProject(project.id)}>
				X
			</button>
			<Link className="edit-project-btn" to={`/projects/${project.id}/edit`}>
				Edit
			</Link>
		</li>
		</Draggable>
	);
};

export default withRouter(ProjectIndexItem)
