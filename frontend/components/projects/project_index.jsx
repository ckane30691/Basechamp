import React from 'react';
import ProjectIndexItem from './project_index_item'
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {

	componentDidMount() {
		this.props.fetchProjects()
	}

	setCoords(e) {
		let x = e.clientX
		console.log(document.getElementsByClassName("edit-project-container")[0]);
		console.log(e.clientX);
		setTimeout(() => {
			if (x < 550) {
				document.getElementsByClassName("edit-project-container")[0].className = "edit-project-container left";
			} else if (x < 990) {
				document.getElementsByClassName("edit-project-container")[0].className = "edit-project-container mid";
			} else {
				document.getElementsByClassName("edit-project-container")[0].className = "edit-project-container right";
			}
		}, 1)
		// document.getElementsByClassName("edit-project-container")[0].style.transform = 'translateX(-180px)';
	}

	render() {
		return (
			<div className="project-idx-container">
				<Link className="project-new-button" to="/projects/new"><span>+</span>New</Link>
				<h2>Projects</h2>

				<ul className='project-list'>
					{
						this.props.projects.map(project => (
							<ProjectIndexItem
								key={project.id}
								deleteProject={this.props.deleteProject}
								updateProject={this.props.updateProject}
								setCoords={this.setCoords}
								project={project} />
						))
				  }
				</ul>
			</div>
		)
	}
}

export default ProjectIndex;
