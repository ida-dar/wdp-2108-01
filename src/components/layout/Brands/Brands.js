import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

import Brand from '../Brand/Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Brands = ({ brands }) => {
  const [brand] = useState(6);
  const [activePage] = useState(0);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row no-gutters justify-content-between ' + styles.brands}>
          <div>
            <Button className={styles.button} variant='small'>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
          </div>
          <div className='row'>
            {brands.slice(activePage * brand, (activePage + 1) * brand).map(item => (
              <div key={item.id} className='col-2'>
                <Brand {...item} />
              </div>
            ))}
          </div>
          <div>
            <Button className={styles.button} variant='small'>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
