import React from 'react';
import CommentIndexContainer from './comment_index_container'

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.comment;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({[field]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createComment(this.state)
		this.setState({body: ""})
	}

	render() {
		let body = this.props.comment ? this.state.body : "";
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={body}
						onChange={this.update('body')}
						placeholder="Add a comment..." />
					<input type="submit" value="Add this comment" />
				</form>
			</div>
		)
	}
}

export default CommentForm;
