import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Button from '../../common/Button/Button';
import CategoryFilter from '../../common/CategoryFilter/CategoryFilterContainer';
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
      <div className={styles.filters + ' col-3'}>
        <CategoryFilter />
        <FilterColor />
        <div className={styles.filterSize}>
          <h5 className={styles.filterHeader}>Filter by size</h5>
          <label className={styles.checkbox}>
            <input type='checkbox'></input>
            <span className={styles.customCheckbox}></span>
            <span className={styles.sizeLetter}>S</span>
            <span className={styles.sizeNumber}>3</span>
          </label>
          <label className={styles.checkbox}>
            <input type='checkbox'></input>
            <span className={styles.customCheckbox}></span>
            <span className={styles.sizeLetter}>M</span>
            <span className={styles.sizeNumber}>4</span>
          </label>
          <label className={styles.checkbox}>
            <input type='checkbox'></input>
            <span className={styles.customCheckbox}></span>
            <span className={styles.sizeLetter}>L</span>
            <span className={styles.sizeNumber}>5</span>
          </label>
          <label className={styles.checkbox}>
            <input type='checkbox'></input>
            <span className={styles.customCheckbox}></span>
            <span className={styles.sizeLetter}>XL</span>
            <span className={styles.sizeNumber}>5</span>
          </label>
          <label className={styles.checkbox}>
            <input type='checkbox'></input>
            <span className={styles.customCheckbox}></span>
            <span className={styles.sizeLetter}>XXL</span>
            <span className={styles.sizeNumber}>5</span>
          </label>
        </div>
      </div>
    </div>
    <div className={styles.brands}> Brands </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
