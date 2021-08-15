import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    visible: true,
    isFading: false,
  };

  changeActivePage(newPage) {
    this.setState({ activePage: newPage });
  }

  handlePageChange(newPage) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 500);
    setTimeout(() => {
      this.setState({ isFading: false });
    }, 500);
  }
  render() {
    const { feedback } = this.props;
    const { activePage, isFading } = this.state;
    const dots = [];

    for (let i = 0; i < feedback.length; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <Swipeable
              leftAction={() => this.changeActivePage(activePage - 1)}
              rightAction={() => this.changeActivePage(activePage + 1)}
            >
              <div className={`row ${isFading ? styles.fadeIn : styles.fadeOut}`}>
                {feedback.slice(activePage * 1, (activePage + 1) * 1).map(feedback => (
                  <div className={styles.contentWrapper} key={feedback.id}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <div className={styles.textContainer}>
                      <p className={styles.text}>{feedback.quote}</p>
                    </div>
                    <div className={styles.client}>
                      <div className={styles.imageWrapper}>
                        <img
                          className={styles.image}
                          src={feedback.photo}
                          alt='Client'
                        />
                      </div>
                      <div className={styles.clientDetails}>
                        <p className={styles.name}>{feedback.name}</p>
                        <p className={styles.clientType}>{feedback.clientType}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Swipeable>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      clientType: PropTypes.string,
      quote: PropTypes.string,
      photo: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  feedback: [],
};

export default Feedback;
