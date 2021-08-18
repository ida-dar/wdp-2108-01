import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsSlider.module.scss';

import ProductImage from '../ProductImage/ProductImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import StarRating from '../StarRating/StarRatingContainer';

const ProductsSlider = ({ products, featured, topSeller, saleOff, topRated }) => {
  const [product] = useState(6);
  const [activePage] = useState(0);

  const tabs = [
    {
      name: 'FEATURED',
      products: featured,
    },
    {
      name: 'TOP SELLER',
      products: topSeller,
    },
    {
      name: 'SALE OFF',
      products: saleOff,
    },
    {
      name: 'TOP RATED',
      products: topRated,
    },
  ];
  const [isFading, setFading] = useState(false);
  // const [isProductFading, setProductFading] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeProduct, setActiveProduct] = useState(activeTab.products[0]);

  const handleTabChange = tabPressed => {
    setFading(true);
    setTimeout(() => {
      setActiveTab(tabs[tabPressed]);
      setActiveProduct(tabs[tabPressed].products[0]);
    }, 300);
    setTimeout(() => {
      setFading(false);
    }, 500);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={`row ${styles.categoriesButtons}`}>
          <div className={`col-3 ${styles.categoryButton}`}>
            <Button
              variant='category'
              className={activeTab.name === 'FEATURED' && styles.active}
              onClick={() => handleTabChange('FEATURED')}
            >
              FEATURED
            </Button>
          </div>
          <div className={`col-3 ${styles.categoryButton}`}>
            <Button
              variant='category'
              className={activeTab.name === 'TOP SELLER' && styles.active}
              onClick={() => handleTabChange('TOP SELLER')}
            >
              TOP SELLER
            </Button>
          </div>
          <div className={`col-3 ${styles.categoryButton}`}>
            <Button
              variant='category'
              className={activeTab.name === 'SALE OFF' && styles.active}
              onClick={() => handleTabChange('SALE OFF')}
            >
              SALE OFF
            </Button>
          </div>
          <div className={`col-3 ${styles.categoryButton}`}>
            <Button
              variant='category'
              className={activeTab.name === 'TOP RATED' && styles.active}
              onClick={() => handleTabChange('TOP RATED')}
            >
              TOP RATED
            </Button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={styles.mainPartWrapper}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={activeProduct.image} alt='image1' />
          </div>

          <div className={styles.actionsWrapper}>
            <div className={styles.actions}>
              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Favorite</div>
              </div>
              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Add to compare</div>
              </div>
              <div className={styles.tooltipHover}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                </Button>
                <div className={styles.tooltip}>Add to basket</div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <h5>product name</h5>
            <div className={styles.stars}>
              <StarRating stars={5} id={0} userRating={2} />
            </div>
          </div>

          <div className={styles.timeBarItem}>
            <div className={styles.number}>$120.00</div>
            <div className={styles.timeUnit}>$160.00</div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={'row justify-content-between ' + styles.products}>
          <div className={`col-1 ${styles.buttonWrapper}`}>
            <Button className={styles.button} variant='small'>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
          </div>
          <div className='col-10'>
            <div className={`row justify-content-between ${styles.imagesWrapper}`}>
              {products
                .slice(activePage * product, (activePage + 1) * product)
                .map((item, index) => (
                  <div key={item.id} className={styles.imageWrapper}>
                    <ProductImage index={index} {...item} />
                  </div>
                ))}
            </div>
          </div>
          <div className={`col-1 ${styles.buttonWrapper}`}>
            <Button className={styles.button} variant='small'>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  featured: PropTypes.arrayOf(PropTypes.object),
  topSeller: PropTypes.arrayOf(PropTypes.object),
  topRated: PropTypes.arrayOf(PropTypes.object),
  saleOff: PropTypes.arrayOf(PropTypes.object),
};

ProductsSlider.defaultProps = {
  products: [],
};

export default ProductsSlider;
