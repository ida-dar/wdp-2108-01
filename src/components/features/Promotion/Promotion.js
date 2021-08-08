import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Button from '../../common/Button/Button';

class Promotion extends React.Component {
  state = {
    activePageLeft: 0,
    pagesCountLeft: 3,
    activePageRight: 0,
    pagesCountRight: this.props.products.length,
  };

  intervalMethod = () => {
    this.setState({
      activePageLeft: this.state.activePageLeft < 2 ? this.state.activePageLeft + 1 : 0,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.intervalMethod, 3000);
  }

  handlePageLeftChange(newPage) {
    clearInterval(this.interval);
    setTimeout(() => {
      this.interval = setInterval(this.intervalMethod, 3000);
    }, 10000);
    this.setState({ activePageLeft: newPage });
  }

  handlePageRightChangeIncrese() {
    if (this.state.activePageRight < this.state.pagesCountRight - 1) {
      this.setState({ activePageRight: this.state.activePageRight + 1 });
    }
  }

  handlePageRightChangeDecrese() {
    if (this.state.activePageRight > 0) {
      this.setState({ activePageRight: this.state.activePageRight - 1 });
    }
  }

  render() {
    const { products } = this.props;
    const {
      pagesCountLeft,
      pagesCountRight,
      activePageLeft,
      activePageRight,
    } = this.state;

    const dots = [];
    for (let i = 0; i < pagesCountLeft; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageLeftChange(i)}
            className={i === activePageLeft && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const images = [];
    for (let i = 0; i < pagesCountRight; i++) {
      images.push(
        <img
          src={products[i].image}
          alt={`image${[i]}`}
          className={`${styles.image} ${i === activePageRight && styles.imageActive}`}
        />
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
              <ProductBox {...products[activePageLeft]} />
            </div>

            <div className={`col-8 ${styles.productWrapperRight}`}>
              <div className={styles.imgWrapper}>{images}</div>
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
                    <Button
                      onClick={() => this.handlePageRightChangeDecrese()}
                      variant='long'
                    >
                      {'<'}
                    </Button>
                  </div>
                  <div className={`col-6 ${styles.button}`}>
                    <Button
                      onClick={() => this.handlePageRightChangeIncrese()}
                      variant='long'
                    >
                      {'>'}
                    </Button>
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
      image: PropTypes.string,
    })
  ),
};

Promotion.defaultProps = {
  products: [],
};

export default Promotion;
