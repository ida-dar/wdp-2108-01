import React from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const setColor = (hoverRating, rating, value, stars) => {
  if (hoverRating >= value) {
    return '#d58e32';
  } else if (!hoverRating && rating >= value) {
    return '#d58e32';
  } else if (!hoverRating && !rating && stars >= value) {
    return '#000';
  }
  return '#000';
};

const StarRating = ({ id, stars, userRating, addRating }) => {
  const [hoverRating, setHoverRating] = React.useState(0);
  const allStars = [1, 2, 3, 4, 5];

  return (
    <div>
      {allStars.map(star => (
        <label key={star} className={styles.starLabel}>
          <input
            className={styles.radio}
            type='radio'
            name='rating'
            value={stars}
            onClick={event => {
              event.preventDefault();
              return addRating(star, id);
            }}
          />
          <FontAwesomeIcon
            icon={star <= (userRating || hoverRating || stars) ? faStar : farStar}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            style={{ color: setColor(hoverRating, userRating, star, stars) }}
          />
        </label>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
  id: PropTypes.string,
  value: PropTypes.number,
  userRating: PropTypes.number,
  addRating: PropTypes.func,
};

export default StarRating;
