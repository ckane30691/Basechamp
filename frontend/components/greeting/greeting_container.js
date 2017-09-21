import { connect } from 'react-redux';
import { logout, dummyLogin } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
	currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
	dummyLogin: () => dispatch(dummyLogin()),
	logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
