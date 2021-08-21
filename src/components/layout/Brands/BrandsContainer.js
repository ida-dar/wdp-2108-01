import { connect } from 'react-redux';

import Brands from './Brands';

import { getAllBrands } from '../../../redux/brandsRedux.js';
import { getRWD } from '../../../redux/MainLayoutRedux';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
  rwd: getRWD(state),
});

export default connect(mapStateToProps)(Brands);
