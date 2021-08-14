import { connect } from 'react-redux';

import ProductsSlider from './ProductsSlider';

import { getAllProducts } from '../../../redux/productsSliderRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

export default connect(mapStateToProps)(ProductsSlider);
