import React from 'react';
import Button from '../../common/Button/Button';
import StarRating from '../../common/StarRating/StarRating';
import styles from './ProductReviews.module.scss';
// import PropTypes from 'prop-types';

const ProductReviews = () => {
  return (
    <div className={`col-lg-10 col-md-6 ${styles.container}`}>
      <div className='row no-gutters'>
        <ul className={styles.categories}>
          <li>description</li>
          <li className={styles.active}>reviews(0)</li>
          <li>specification</li>
          <li>custom tab</li>
        </ul>
      </div>
      <div className='container'>
        <p>There are no reviews for this product.</p>
        <p className={styles.addReview}>Add a review</p>
        <p>Your rating</p>
        <div className={`row no-gutters ${styles.rating}`}>
          <p>Bad</p>
          <StarRating />
          <p>Good</p>
        </div>
        <form className={styles.formContainer}>
          <label className={styles.label}>
            {' '}
            Your review <br />
            <textarea className={styles.input} name='reviews' />
          </label>
          <div className='row justify-content-between no-gutters'>
            <label className={styles.label}>
              {' '}
              <input
                className={styles.input}
                name='name'
                type='text'
                placeholder='Name *'
              />
            </label>
            <label className={styles.label}>
              {' '}
              <input
                className={styles.input}
                name='email'
                type='email'
                placeholder='Email *'
              />
            </label>
            <div className={styles.buttonForm} action={`${process.env.PUBLIC_URL}/`}>
              <Button variant='main' type='submit'>
                Continue
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// ProductReviews.propTypes = {};

export default ProductReviews;
