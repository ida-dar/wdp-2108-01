import { connect } from 'react-redux';

import ProductsSlider from './ProductsSlider';

import { getAllProducts } from '../../../redux/productsSliderRedux';
import {getNew, getProductForPrice, getOnSale, getMinRate} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  featured: getNew(state),
  topSeller: getProductForPrice(state, 0, 30),
  saleOff: getOnSale(state),
  topRated: getMinRate(state, 3),
});

export default connect(mapStateToProps)(ProductsSlider);
