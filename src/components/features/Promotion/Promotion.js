import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Button from '../../common/Button/Button';

class Promotion extends React.Component {
  state = {
    activePage: 0,
    pagesCount: 3,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { products } = this.props;
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
            <div className={`col-4 ${styles.productWrapperLeft}`}>
              <div className={styles.panelBar}>
                <div className='row justify-content-between'>
                  <div className={`col-5 ${styles.title}`}>HOT DEALS</div>
                  <div className={`col-5 ${styles.dots}`}>
                    <ul>{dots}</ul>
                  </div>
                </div>
              </div>
              <div className={styles.timeBar}>
                <div className='row justify-content-around'>
                  <div className={`col-2 ${styles.timeBarItem}`}>
                    <div className={styles.number}>25</div>
                    <div className={styles.timeUnit}>DAYS</div>
                  </div>
                  <div className={`col-2 ${styles.timeBarItem}`}>
                    <div className={styles.number}>10</div>
                    <div className={styles.timeUnit}>HRS</div>
                  </div>
                  <div className={`col-2 ${styles.timeBarItem}`}>
                    <div className={styles.number}>45</div>
                    <div className={styles.timeUnit}>MINS</div>
                  </div>
                  <div className={`col-2 ${styles.timeBarItem}`}>
                    <div className={styles.number}>30</div>
                    <div className={styles.timeUnit}>SECS</div>
                  </div>
                </div>
              </div>
              <ProductBox {...products[0]} />
            </div>

            <div className={`col-8 ${styles.productWrapperRight}`}>
              <div className={styles.imgWrapper}>
                <img
                  src={
                    'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                  }
                />
              </div>
              <div className={styles.shadowWrapper}></div>
              <div className={styles.shadowTitle}>
                INDOOR <span>FURNITURE</span>
                <div className={styles.shadowSubtitle}>
                  SAVE UP TO 50% OF ALL FURNITURE
                </div>
              </div>
              <div className={styles.mainButton}>
                <Button variant='big'>SHOP NOW</Button>
              </div>
              <div className={styles.shadowButtonsWrapper}>
                <div className='row'>
                  <div className={`col-6 ${styles.button}`}>
                    <Button variant='long'>{'<'}</Button>
                  </div>
                  <div className={`col-6 ${styles.button}`}>
                    <Button variant='long'>{'>'}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Promotion.propTypes = {
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

Promotion.defaultProps = {
  products: [],
};

export default Promotion;
