import { connect } from 'react-redux';
import {
	createComment
} from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
	comment: {body: "", message_id: ownProps.match.params.messageId}
});

const mapDispatchToProps = dispatch => ({
	createComment: comment => dispatch(createComment(comment))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentForm));
