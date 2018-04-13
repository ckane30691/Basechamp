import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {
	deleteComment,
  fetchComments } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		comments: Object.keys(state.entities.comments)
		.map(id => state.entities.comments[id]),
		currentUser: state.session.currentUser
	};
};

const mapDispatchToProps = dispatch => ({
	deleteComment: id => dispatch(deleteComment(id)),
	fetchComments: id => dispatch(fetchComments(id))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentIndex));
