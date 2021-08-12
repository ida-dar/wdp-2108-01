import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  render() {
    const { feedback } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li>
                    <a className={styles.active} href='#'>
                      page
                    </a>
                  </li>
                  <li>
                    <a href='#'>page</a>
                  </li>
                  <li>
                    <a href='#'>page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            {feedback.map(feedback => {
              return (
                <div className={styles.contentWrapper} key={feedback.id}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div>
                  <div className={styles.textContainer}>
                    <p className={styles.text}>{feedback.quote}</p>
                  </div>
                  <div className={styles.client}>
                    <div className={styles.imageWrapper}>
                      <img className={styles.image} src={feedback.photo} alt='Client' />
                    </div>
                    <div className={styles.clientDetails}>
                      <p className={styles.name}>{feedback.name}</p>
                      <p className={styles.clientType}>{feedback.clientType}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
