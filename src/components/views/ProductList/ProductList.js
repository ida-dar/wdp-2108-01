import React from 'react';
import styles from './ProductList.module.scss';
import Button from '../../common/Button/Button';
import Brands from '../../layout/Brands/BrandsContainer';
import CategoryFilter from '../../common/CategoryFilter/CategoryFilterContainer';

import FilterColor from '../../features/FilterColor/FilterColor';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

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
    <div className={styles.products + ' ' + styles.container}>
      <div className={styles.productList + ' col-9'}> Product List </div>
      <div className={styles.productList + ' col-9'}>
        <NewFurniture subpage='pageShop' />
      </div>
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
      <div className={styles.brands}> Brands </div>
    </div>
    <Brands />
  </div>
);

export default ProductList;
