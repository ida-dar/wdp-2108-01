import React from 'react';
import styles from './Popout.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import PropTypes from 'prop-types';
import { faSignature, faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Popout = ({ name, price, promo, image }) => {
  return (
    <section className={styles.root}>
      <div className={styles.popoutWrapper}>
        <div className={styles.popoutProductImg}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.popoutProductInfo}>
          <div className={styles.popoutInfoWrapper}>
            <FeatureBox icon={faSignature} href='#'>
              <h5>{name}</h5>
            </FeatureBox>
          </div>
          <div className={styles.popoutInfoWrapper}>
            <FeatureBox icon={faDollarSign} href='#'>
              <h5>${price}</h5>
            </FeatureBox>
          </div>
          <div className={styles.popoutInfoWrapper}>
            <FeatureBox icon={faStar} href='#'>
              <h5>{promo}</h5>
            </FeatureBox>
          </div>
        </div>
      </div>
    </section>
  );
};

Popout.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  image: PropTypes.string,
};

export default Popout;
