import React from 'react';
import CommentIndexItem from './comment_index_item';
import { Link, withRouter } from 'react-router-dom';

class CommentIndex extends React.Component {

	componentDidMount() {
		this.props.fetchComments(this.props.match.params.messageId);
	}

	render() {
		return(
			<div className="comment-index-container">
			<ul className="comment-list">
				{
					this.props.comments.map(comment => (
						<CommentIndexItem
							comment={comment}
							currentUser={this.props.currentUser}
							key={comment.id}
							deleteComment={this.props.deleteComment} />
					))
				}
			</ul>
			</div>
		);
	}
}

export default withRouter(CommentIndex);
