import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';

const CompanyClaim = () => {

  let history = useHistory();

  const redirect = () => {
    history.push('/cart');
  };

  return(
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-top align-items-md-center'>
          <div
            className={`col-6 col-md-4 text-center text-md-left order-3 order-sm-3 order-md-1 ${styles.phoneNumber}`}
          >
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
            </p>
          </div>
          <div
            className={`col-6 col-md-4 text-center order-1 order-sm-1 order-md-2 ${styles.centerLogo}`}
          >
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div
            className={`col-6 col-md-4 text-center text-md-right order-2 order-sm-2 order-md-3 ${styles.cart}`}
          >
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}onClick={redirect}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>99999</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// CompanyClaim.propTypes = {};

export default CompanyClaim;
