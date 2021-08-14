import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeFavourite, getAll } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  changeFavourite: id => dispatch(changeFavourite(id)),
  addToCart: product => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
