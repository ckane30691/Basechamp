import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectFormContainer from './project_form_container';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProjects()
	}

	render() {
		return (
			<div className="project-idx-container">
				<Link className="project-new-button" to="/projects/new"><span>+</span>New</Link>
				<h2>Projects</h2>

				<ul className='project-list'>
					{
						this.props.projects.map(project => (
							<div>
								<ProjectIndexItem
									key={project.id}
									deleteProject={this.props.deleteProject}
									updateProject={this.props.updateProject}
									setCoords={this.setCoords}
									project={project} />
								<ProjectFormContainer renderId={project.id} shouldRender={false} formType={'edit'} />
						 </div>
						))
				  }
				</ul>
			</div>
		)
	}
}

export default ProjectIndex;
