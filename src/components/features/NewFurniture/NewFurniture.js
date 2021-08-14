import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Swipeable from '../Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    currRWD: 'desktops',
    isFading: false,
  };

  componentDidMount() {
    const func = () => this.setDisplay(this.props.rwd, this.state.currRWD);
    func();
    window.addEventListener('resize', func);
  }

  setDisplay(display, currDisplay) {
    if (currDisplay !== display) {
      this.setState({ currRWD: display });
    }
  }

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      isFading: true,
    });
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState({ isFading: false });
        }.bind(this),
        1000
      );
    }
  }

  handleCategoryChange(newCategory) {
    this.setState({
      activeCategory: newCategory,
      isFading: true,
    });
    if (this.state.isFading === false) {
      setTimeout(
        function() {
          this.setState({ isFading: false });
        }.bind(this),
        1000
      );
    }
  }

  render() {
    const { categories, products, addRating } = this.props;
    const { activeCategory, activePage, currRWD, isFading } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const movePageRight = () => {
      const newPage = activePage - 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

    const movePageLeft = () => {
      const newPage = activePage + 1;
      if (newPage >= 0) {
        this.setState({ activePage: newPage });
      }
    };

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
      <Swipeable leftAction={movePageLeft} rightAction={movePageRight}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`row ${isFading ? styles.fadeIn : styles.fadeOut}`}>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-6 col-md-4 col-lg-3'>
                <ProductBox {...item} addRating={addRating} />
              </div>
            ))}
          </div>
          {/* DO PRZEMYŚLENIA */}
          <div className={'row'}>
            {/* {currRWD === 'desktops'
              ? categoryProducts
                  .slice(activePage * 8, (activePage + 1) * 8)
                  .map(item => (
                    <div key={item.id} className='col-3'>
                      <ProductBox {...item} />
                    </div>
                  ))
                  : null} */}
            {currRWD === 'tablets'
              ? categoryProducts
                  .slice(activePage * 4, (activePage + 1) * 4)
                  .map(item => (
                    <div key={item.id} className='col-3'>
                      <ProductBox {...item} />
                    </div>
                  ))
              : null}
            {currRWD === 'phones'
              ? categoryProducts
                  .slice(activePage * 2, (activePage + 1) * 2)
                  .map(item => (
                    <div key={item.id} className='col-3'>
                      <ProductBox {...item} />
                    </div>
                  ))
              : null}
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  rwd: PropTypes.string,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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
  addRating: PropTypes.func,
  isFading: PropTypes.bool,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
