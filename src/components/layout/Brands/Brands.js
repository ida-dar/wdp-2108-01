import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

import Brand from '../Brand/Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Brands = ({ brands }) => {
  const [brand] = useState(6);
  const [activePage, setActivePage] = useState(0);

  const handleClickPrev = e => {
    e.preventDefault();

    setActivePage(activePage === 0 ? brands.length / brand - 1 : activePage - 1);
  };

  const handleClickNext = e => {
    e.preventDefault();

    setActivePage(activePage === brands.length / brand - 1 ? 0 : activePage + 1);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'col-auto ' + styles.heading}>
          <h3>Brands</h3>
        </div>
        <div className={'row no-gutters justify-content-between ' + styles.brands}>
          <div>
            <Button className={styles.button} variant='small' onClick={handleClickPrev}>
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
            <Button className={styles.button} variant='small' onClick={handleClickNext}>
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
