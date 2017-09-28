import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.project;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.match.params.projectId) {
			this.props.fetchProject(this.props.match.params.projectId)
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState(newProps.project)
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state)
		.then(() => this.props.history.push('/projects'));;
	}

	render() {
		const title = this.state ? this.state.title : "";
		const desc = this.state ? this.state.description : "";
		return(
			<div className={`${this.props.formType}-project-container`}>
				<form onSubmit={this.handleSubmit}>
					<input required type="text"
						value={title}
						onChange={this.update('title')}
						className="project-input pti"
						placeholder="Name this project" />

					<br/>

					<input type="text"
						value={desc}
						onChange={this.update('description')}
						className="project-input pdi"
						placeholder="Project Description" />

					<input
						className="project-submit"
						type="submit"
						value="Save" />

				</form>
				<Link to="/projects"
					className="back-btn">
					↷
				</Link>
			</div>
		)
	}
}

export default withRouter(ProjectForm);
