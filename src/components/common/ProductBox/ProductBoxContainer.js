import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeFavourite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeFavourite: id => dispatch(changeFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
