import { connect } from 'react-redux';
import Cart from './Cart';
import {
  clearCart,
  getAll,
  removeProduct,
  quantityDown,
  quantityUp,
} from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeProduct(product)),
  clearCart: payload => dispatch(clearCart(payload)),
  quantityDown: payload => dispatch(quantityDown(payload)),
  quantityUp: payload => dispatch(quantityUp(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
