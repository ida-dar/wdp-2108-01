import React from 'react';
import PropTypes from 'prop-types';
import ProductReviews from '../../features/ProductReviews/ProductReviews';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import styles from './ProductPage.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faExpandArrowsAlt,
  faShoppingBasket,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import StarRating from '../../common/StarRating/StarRatingContainer';

const ProductPage = (id, userRating, stars) => (
  <div className={styles.root}>
    <div className={'container ' + styles.pageWrapper}>
      <div className='row'>
        <div className={'col-5 ' + styles.pageColumnLeft}>
          <div className={styles.photoContainer}>
            <img className={styles.photo} src={''} alt='' />
            <Button className={styles.expandButton} variant='outline'>
              <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
            </Button>
          </div>

          <div className={'row ' + styles.sliderBox}>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>

            <div className={'col-12 ' + styles.sideArrow}>
              <Button variant='sideArrows'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button variant='sideArrows'>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>

        <div className={'col-7 ' + styles.pageColumnRight}>
          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.productIntro}>
              <h4>Sunbaby Magic Bear Chair</h4>
              <div className={'row ' + styles.productIntro}>
                <div className={styles.buttonContainer}>
                  <Button variant='sideArrows'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Button>
                </div>
                <div className={styles.buttonContainer}>
                  <Button variant='sideArrows'>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                </div>
              </div>
            </div>
            <div className={'row ' + styles.starsRow}>
              <StarRating stars={stars} id={id} userRating={userRating} />
              <p>(0 reviews)</p>
              <p>Add Your Review</p>
            </div>
          </div>

          <div className={'row ' + styles.productInfoContainer}>
            <div className={styles.oldPrice}>$350.00</div>
            <div className={styles.newPrice}>$250.00</div>
          </div>

          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.addToCartContainer}>
              <div className={styles.buttonContainer}>
                <Button variant='favourite2'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Button>
              </div>
            </div>
            <div className={'row ' + styles.addToCartContainer}>
              <p>Quantity:</p>
              <div className={styles.quantity}>2</div>
              <div className={styles.buttonContainer}>
                <Button variant='quantityChange'>-</Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='quantityChange'>+</Button>
              </div>
            </div>
          </div>

          <div className={styles.productInfoContainer}>
            <p className={styles.overview}>Quick Overview</p>
            <p className={styles.description}>
              Pellentesque dui quam, finibus et venenatis sed, tristique vitae nisi.
              Pellentesque gravida erat in pretium ultrices. In auctor arcu eget leo
              rutrum, non laoreet lorem dignissim.
            </p>
          </div>

          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.availabilityContainer}>
              <p>Availability:</p>
              <div>In Stock</div>
            </div>
            <div className={'row ' + styles.availabilityContainer}>
              <p>Category:</p>
              <div>Furniture</div>
            </div>
          </div>

          <div className={'row ' + styles.productInfoContainer}>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='facebook'>
                <FontAwesomeIcon
                  className={styles.facebook}
                  icon={faFacebookF}
                ></FontAwesomeIcon>{' '}
                Share
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='google'>
                <FontAwesomeIcon
                  className={styles.google}
                  icon={faGooglePlusG}
                ></FontAwesomeIcon>{' '}
                Google+
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='tweet'>
                <FontAwesomeIcon
                  className={styles.twitter}
                  icon={faTwitter}
                ></FontAwesomeIcon>{' '}
                Tweet
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='pinterest'>
                <FontAwesomeIcon
                  className={styles.pinterest}
                  icon={faPinterestP}
                ></FontAwesomeIcon>{' '}
                Pinterest
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='linkedin'>
                <FontAwesomeIcon
                  className={styles.linkedIn}
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>{' '}
                Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ProductReviews />
      <NewFurniture subpage='ProductPage' />
    </div>
  </div>
);

ProductPage.propTypes = {
  stars: PropTypes.number,
  id: PropTypes.string,
  userRating: PropTypes.number,
};

export default ProductPage;
