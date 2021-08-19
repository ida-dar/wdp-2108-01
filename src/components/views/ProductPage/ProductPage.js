import React from 'react';
import ProductReviews from '../../features/ProductReviews/ProductReviews';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      This is ProductPage
      <ProductReviews />
      <NewFurniture subpage='ProductPage' />
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
