import { connect } from 'react-redux';
import Compare from './CompareProducts';
import { getAll, addToCompare, removeFromCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addCompare: product => dispatch(addToCompare(product)),
  removeCompare: product => dispatch(removeFromCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
