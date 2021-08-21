import React from 'react';
import styles from './FilterColor.module.scss';

const FilterColor = () => (
  <div className={styles.filterColorWrapper}>
    <h6>FILTER BY COLOR</h6>
    <hr></hr>
    <div className={styles.colorWrapper}>
      <span className={styles.red}></span>
      <a>Red</a>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.black}></span>
      <a>Black</a>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.yellow}></span>
      <a>Yellow</a>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.blue}></span>
      <a>Blue</a>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.pink}></span>
      <a>Pink</a>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.green}></span>
      <a>Green</a>
    </div>
  </div>
);

export default FilterColor;
