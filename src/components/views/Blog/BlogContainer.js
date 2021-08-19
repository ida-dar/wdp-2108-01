import { connect } from 'react-redux';

import Blog from './Blog';

import { getBlog } from '../../../redux/blogRedux.js';

const mapStateToProps = state => ({
  blog: getBlog(state),
});

export default connect(mapStateToProps)(Blog);
