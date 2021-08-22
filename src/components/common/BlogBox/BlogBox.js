import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const BlogBox = ({ date, comments, title, text }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <div className={styles.details}>
        <span>
          <FontAwesomeIcon className={styles.icons} icon={faCalendarAlt} /> {date}
        </span>
        <span>
          <FontAwesomeIcon className={styles.icons} icon={faComments} /> {comments}{' '}
          Comments
        </span>
      </div>
    </div>
    <div className={styles.flavourText}>
      <h5 className={styles.title}> {title} </h5>
      <p className={styles.description}> {text} </p>
    </div>
    <Button variant='main'> Read More </Button>
  </div>
);

BlogBox.propTypes = {
  date: PropTypes.string,
  comments: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default BlogBox;
