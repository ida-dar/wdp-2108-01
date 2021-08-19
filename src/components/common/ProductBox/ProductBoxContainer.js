import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeFavourite, getAll } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';
import { addToCompare, getCount } from '../../../redux/compareRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
  getCount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavourite: id => dispatch(changeFavourite(id)),
  addToCart: product => dispatch(addProduct(product)),
  addToCompare: product => dispatch(addToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
