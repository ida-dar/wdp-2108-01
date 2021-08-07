import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = ({ name, image, index }) => {
  return (
    <div className={index === 0 ? styles.image : styles.imageShadow}>
      <img src={image} alt={name} />
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
};

export default ProductImage;
