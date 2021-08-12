import { connect } from 'react-redux';

import OnSpecial from './OnSpecial';

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(OnSpecial);
