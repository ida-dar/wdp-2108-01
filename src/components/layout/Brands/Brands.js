import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

import Brand from '../Brand/Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Swipeable from '../../features/Swipeable/Swipeable';

class Brands extends React.Component {
  state = {
    activePage: 0,
    currRWD: 'desktops',
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

  handleClickPrev(newPage) {
    if (-1 < newPage) {
      this.setState({ activePage: newPage });
    } else {
      return false;
    }
  }
  handleClickNext(newPage, pagesCount) {
    if (newPage < pagesCount) {
      this.setState({ activePage: newPage });
    } else {
      return false;
    }
  }

  render() {
    const { brands } = this.props;
    const { activePage, currRWD } = this.state;
    const pagesCount = Math.ceil(brands.length / 6);

    let columnClass = 'col-2';
    let productCount = 6;
    if (currRWD === 'desktops') {
      columnClass = 'col-2';
      productCount = 6;
    } else if (currRWD === 'tablets') {
      columnClass = 'col-3';
      productCount = 4;
    } else if (currRWD === 'phones') {
      columnClass = 'col-6';
      productCount = 2;
    }
    /*
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
*/
    return (
      //<Swipeable leftAction={handleClickPrev} rightAction={handleClickNext}>
      <div className={styles.root}>
        <div className='container'>
          <div className={'col-auto ' + styles.heading}>
            <h3>Brands</h3>
          </div>
          <div className={'row ' + styles.brands}>
            <div className='col-1'>
              <Button
                className={styles.button}
                variant='small'
                onClick={() => this.handleClickPrev(activePage - 1)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
            </div>
            <div className='col-10'>
              <div className='row'>
                {brands
                  .slice(activePage * productCount, (activePage + 1) * productCount)
                  .map(item => (
                    <div key={item.id} className={columnClass}>
                      <Brand {...item} />
                    </div>
                  ))}
              </div>
            </div>
            <div className='col-1'>
              <Button
                className={styles.button}
                variant='small'
                onClick={() => this.handleClickNext(activePage + 1, pagesCount)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      //</Swipeable>
    );
  }
}

Brands.propTypes = {
  rwd: PropTypes.string,
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
