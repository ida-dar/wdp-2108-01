import React from 'react';
import PropTypes from 'prop-types';
import styles from './OnSpecial.module.scss';

const OnSpecial = props => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row ' + styles.specialWrapperLg}>
        <div className={'col-md-6 col-12 col-xs-12 ' + styles.col}>
          <img
            className={`${styles.photo} ${styles.shadow}`}
            src={
              'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=380'
            }
            alt=''
          />
          <div className={styles.shadowWrapper}></div>
          <div className={styles.leftPhoto}>
            <div className={styles.leftPhotoSubtitle}>
              <span>GUEST ROOM</span>
            </div>
            <div className={styles.leftPhotoTitle}>
              <span>SOFA</span>
            </div>
            <div className={styles.leftPhotoPromo}>
              <span>-20%</span>
            </div>
          </div>
        </div>
        <div className={'col-md-6 col-12 col-xs-12 ' + styles.col}>
          <div className={styles.specialWrapperSml}>
            <img
              className={styles.photo}
              src={
                'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=280'
              }
              alt=''
            />
            <div className={styles.topRightPhoto}>
              <div className={styles.topRightPhotoTitle}>
                <span>OFFICE </span>CHAIR
              </div>
              <div className={styles.topRightPhotoSubtitle}>COLLECTION</div>
              <div className={styles.topRightPhotoPrice}>
                <span>$200</span>
              </div>
            </div>
          </div>
          <div className={styles.specialWrapperSml}>
            <img
              className={styles.photo}
              src={
                'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }
              alt=''
            />
            <div className={styles.bottomRightPhoto}>
              <div className={styles.bottomRightPhotoTitle}>
                <span>SPECIAL </span>COLLECTION
              </div>
              <div className={styles.bottomRightPhotoSubtitle}>
                SAVE UP TO 45% OF FURNITURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

OnSpecial.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
};

export default OnSpecial;
