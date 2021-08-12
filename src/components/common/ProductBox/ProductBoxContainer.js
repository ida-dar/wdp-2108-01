import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeComparison } from '../../../redux/productsRedux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeComparison: product => dispatch(changeComparison(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
