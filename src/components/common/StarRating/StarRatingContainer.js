import { connect } from 'react-redux';
import { addRating } from '../../../redux/productsRedux.js';
import StarRating from './StarRating';

const mapDispatcherToProps = dispatcher => ({
  addRating: (userRating, id) =>
    dispatcher(addRating({ id: id, userRating: userRating })),
});

export default connect(null, mapDispatcherToProps)(StarRating);
