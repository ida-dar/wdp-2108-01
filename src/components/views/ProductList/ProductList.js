import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Button from '../../common/Button/Button';
import FilterColor from '../../features/FilterColor/FilterColor';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.banner}>
            <div className={styles.title}>
              <h1>
                BEDROOM <span>FURNITURE</span>
              </h1>
              <h5>
                ALWAYS <span>25%</span> OFF OR MORE
              </h5>
            </div>
            <div className={styles.nav}>
              <Button className={styles.Btn}>Home</Button>
              <h3> {'>'} </h3>
              <Button className={styles.Btn}>Furniture</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.products}>
      <div className={styles.productList + ' col-9'}> Product List </div>
      <div className={styles.filters + ' col-3'}> Filters </div>
      <FilterColor />

    </div>
    <div className={styles.brands}> Brands </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
