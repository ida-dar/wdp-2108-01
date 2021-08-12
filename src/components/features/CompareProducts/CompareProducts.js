import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareProducts.module.scss';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

const CompareProducts = ({ getCompare, removeComparison }) => (
  <div className={styles.root}>
    {getCompare.map(product => (
      <div
        key={product.id}
        className={styles.box}
        onClick={() => removeComparison(product.id)}
      >
        <img className={styles.image} src={product.image} alt=''></img>
        <div className={styles.closeWrapper}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      </div>
    ))}
    <div className={styles.buttonWrapper}>
      <Button className={styles.button}>Compare</Button>
    </div>
  </div>
);

CompareProducts.propTypes = {
  getCompare: PropTypes.array,
  removeComparison: PropTypes.func,
};

export default CompareProducts;
