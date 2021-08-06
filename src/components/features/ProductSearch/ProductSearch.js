import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.categories}>
        Select a category
        <li>
          <ul>
            <h6>Kitchen</h6>
            <li> Tables</li>
            <li> Chairs</li>
            <li> Counters</li>
          </ul>
        </li>
        <li>
          <ul>
            <h6>Living Room</h6>
            <li> Couches</li>
            <li> Armchairs</li>
            <li> Sofas</li>
          </ul>
        </li>
        <li>
          <ul>
            <h6>Bathroom</h6>
            <li> Counters</li>
            <li> Cabinets</li>
            <li> Mirrors</li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
