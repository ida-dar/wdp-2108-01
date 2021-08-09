import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import ProdcutsSlider from '../../common/ProductsSlider/ProductsSliderContainer';
import Button from '../../common/Button/Button';

class Gallery extends React.Component {
  state = {
    activePage: 0,
    pagesCount: 3,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    //const { products } = this.props;
    const { pagesCount, activePage } = this.state;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <section className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.wrapper}`}>
            <div className={`col-6 ${styles.productWrapperLeft}`}>
              <ProdcutsSlider />
            </div>

            <div className={`col-6 ${styles.productWrapperRight}`}>
              <div className={styles.imgWrapper}>
                <img
                  src={
                    'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                  }
                  alt='image1'
                />
              </div>
              <div className={styles.shadowTitle}>
                FROM <span>$50.80</span>
                <div className={styles.shadowSubtitle}>Living Room Sofa</div>
              </div>
              <div className={styles.mainButton}>
                <Button variant='bigGreen'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
