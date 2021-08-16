import { connect } from 'react-redux';

import Gallery from './Gallery';
import {
  getNew,
  getProductForPrice,
  getOnSale,
  getMinRate,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: state.products,
  featured: getNew(state),
  topSeller: getProductForPrice(state, 0, 30),
  saleOff: getOnSale(state),
  topRated: getMinRate(state, 3),
});

export default connect(mapStateToProps)(Gallery);
