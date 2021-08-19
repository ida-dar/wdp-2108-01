import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { getAllCategories } from '../../../redux/CategoryFilterRedux';

const mapStateToProps = state => ({
  categories: getAllCategories(state),
});

export default connect(mapStateToProps)(CategoryFilter);
