import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './CategoryFilter.module.scss';

const CategoryFilter = ({ categories }) => (
  <div className={styles.root}>
    <h3 className={styles.title}> Filter by Categories </h3>
    {categories.map(category => (
      <div className={styles.container} key={category.id}>
        <span className={styles.category}>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
          {category.name}
        </span>
        <div className={styles.number}> 5 </div>
      </div>
    ))}
  </div>
);

CategoryFilter.propTypes = {
  categories: PropTypes.array,
};

export default CategoryFilter;
