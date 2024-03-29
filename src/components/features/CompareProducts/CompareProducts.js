import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompareProducts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const Compare = ({ products, removeCompare }) => {
  const handleRemove = product => {
    removeCompare(product);
  };

  return (
    <React.Fragment>
      {products.length > 0 && (
        <div className={styles.container}>
          {products.map(product => (
            <div key={product.id} className={`col-2 ${styles.imageContainer}`}>
              <h6>{product.name}</h6>
              <img src={product.image} alt={product.name} />
              <p>Price: ${product.price}</p>
              <p className={styles.favourite}>
                {product.favourite ? <FontAwesomeIcon icon={faHeart} /> : ''}
              </p>
              <div
                className={styles.iconContainer}
                onClick={() => handleRemove(product)}
              >
                <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} />
              </div>
            </div>
          ))}
          <div className='col-1'>
            <Button variant='small'>Compare</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

Compare.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  removeCompare: PropTypes.func,
};

Compare.defaultProps = {
  products: [],
};

export default Compare;
