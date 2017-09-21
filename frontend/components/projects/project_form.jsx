import React from 'react';

class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.project;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createProject(this.state)
		.then(() => this.props.history.push('/projects'));;
	}

	render() {

		return(
			<div className="new-project-container">
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						value={this.state.title}
						onChange={this.update('title')}
						className="project-input"
						placeholder="Name this project" />

					<br/>

					<input type="text"
						value={this.state.description}
						onChange={this.update('description')}
						className="project-input"
						placeholder="Give this project a tagline" />

					<input
						className="project-submit"
						type="submit"
						value="Submit" />

				</form>
			</div>
		)
	}
}

export default ProjectForm;
