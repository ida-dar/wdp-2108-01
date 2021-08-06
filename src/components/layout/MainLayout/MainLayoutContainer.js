import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { changeRWD, getRWD } from '../../../redux/MainLayoutRedux';

const mapStateToProps = state => ({
  rwd: getRWD(state),
});

const mapDispatchToProps = dispatch => ({
  changeRWD: mode => dispatch(changeRWD(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
