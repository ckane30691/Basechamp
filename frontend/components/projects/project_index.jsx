import React from 'react';
import ProjectIndexItem from './project_index_item'

class ProjectIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProjects()
	}

	render() {
		return (
			<div>
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
