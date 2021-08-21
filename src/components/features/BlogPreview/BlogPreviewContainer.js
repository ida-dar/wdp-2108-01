import { connect } from 'react-redux';

import BlogPreview from './BlogPreview';

import { getBlog } from '../../../redux/blogRedux.js';

const mapStateToProps = state => ({
  blog: getBlog(state),
});

export default connect(mapStateToProps)(BlogPreview);
