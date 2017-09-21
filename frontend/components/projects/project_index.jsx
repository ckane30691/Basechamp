import React from 'react';
import ProjectIndexItem from './project_index_item'
import ProjectFormContainer from './project_form_container'
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProjects()
	}

	render() {
		return (
			<div>
				<Link to="/projects/new">New</Link>
				<ul>
					{
						this.props.projects.map(project => (
							<ProjectIndexItem
								key={project.id}
								deleteProject={this.props.deleteProject}
								project={project} />
						))
				  }
				</ul>
			</div>
		)
	}
}

export default ProjectIndex;
