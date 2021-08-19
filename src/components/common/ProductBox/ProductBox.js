import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRatingContainer';
import { Link } from 'react-router-dom';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  favourite,
  toCompare,
  image,
  id,
  userRating,
  changeFavourite,
  addToCart,
  addToCompare,
  getCount,
}) => {
  const handleCart = e => {
    e.preventDefault();
    addToCart({ id, name, price, image });
  };

  const handleCompare = e => {
    e.preventDefault();

    let maxItemsCount = 4;

    if (getCount < maxItemsCount) {
      addToCompare({ id, image });
      toCompare = true;
    } else {
      alert('You have selected maximum amount of items to compare');
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small' onClick={handleCart}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          <StarRating stars={stars} id={id} userRating={userRating} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={favourite ? 'favourite' : 'outline'}
            onClick={() => changeFavourite(id)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' onClick={handleCompare}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  userRating: PropTypes.number,
  favourite: PropTypes.bool,
  toCompare: PropTypes.bool,
  changeFavourite: PropTypes.func,
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  getCount: PropTypes.number,
};

export default ProductBox;
