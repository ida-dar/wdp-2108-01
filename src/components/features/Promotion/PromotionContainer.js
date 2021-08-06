import { connect } from 'react-redux';

import Promotion from './Promotion';

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Promotion);
