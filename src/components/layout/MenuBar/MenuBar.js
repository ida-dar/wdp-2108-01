import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-sm-10 col-md-12 col-lg-12 col-xl-5'>
          <ProductSearch />
        </div>
        <div className={'col-sm-2 col-md-12 col-lg-12 col-xl-auto ' + styles.menu}>
          {/* For big screens & tablets */}
          <ul className='d-none d-md-flex col-md-12'>
            <li>
              <a href='/' className={'nav-link' + styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='/shop/furniture' className='nav-link'>
                Furniture
              </a>
            </li>
            <li>
              <a href='/shop/chair' className='nav-link'>
                Chair
              </a>
            </li>
            <li>
              <a href='/shop/table' className='nav-link'>
                Table
              </a>
            </li>
            <li>
              <a href='/shop/sofa' className='nav-link'>
                Sofa
              </a>
            </li>
            <li>
              <a href='/shop/bedroom' className='nav-link'>
                Bedroom
              </a>
            </li>
            <li>
              <a href='/blog' className='nav-link'>
                Blog
              </a>
            </li>
          </ul>

          {/* For smartphones */}
          <div className={'d-sm-flex d-md-none ' + styles.dropdown_menu}>
            <button className={styles.dropdown_menu_button}>Menu</button>
            <div className={styles.dropdown_menu_content}>
              <p>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </p>
              <p>
                <a href='#'>Furniture</a>
              </p>
              <p>
                <a href='#'>Chair</a>
              </p>
              <p>
                <a href='#'>Table</a>
              </p>
              <p>
                <a href='#'>Sofa</a>
              </p>
              <p>
                <a href='#'>Bedroom</a>
              </p>
              <p>
                <a href='#'>Blog</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
