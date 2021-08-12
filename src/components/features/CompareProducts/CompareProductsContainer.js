import { connect } from 'react-redux';
import { getCompare, removeComparison } from '../../../redux/productsRedux';
import CompareProducts from './CompareProducts';

const mapStateToProps = state => ({
  products: getCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeComparison: id => dispatch(removeComparison(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
