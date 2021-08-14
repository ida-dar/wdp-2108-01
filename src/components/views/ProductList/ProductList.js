import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className={styles.banner}> Banner </div>
    <div className={styles.products}>
      <div className={styles.productList + ' col-9'}> Product List </div>
      <div className={styles.filters + ' col-3'}> Filters </div>
    </div>
    <div className={styles.brands}> Brands </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
