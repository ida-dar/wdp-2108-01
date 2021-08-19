import { connect } from 'react-redux';
import { getAll } from '../../../redux/feedbackRedux';
import Feedback from './Feedback';

const mapStateToProps = state => ({
  feedback: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
