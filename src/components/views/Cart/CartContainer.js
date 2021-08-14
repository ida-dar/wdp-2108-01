import { connect } from 'react-redux';
import Cart from './Cart';
import { clearCart, getAll, removeProduct } from '../../../redux/cartRedux';

const mapStateToProps = (state, props) => ({
  products: getAll(state, props),
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeProduct(product)),
  clearCart: payload => dispatch(clearCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
