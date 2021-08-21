import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';

class Blog extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={'row no-gutters align-items-end ' + styles.panelBar}>
            <div className={'col-auto ' + styles.heading}>
              <h3> Archives</h3>
            </div>
          </div>

          <div className='row'>
            <div className='col-2'></div>

            <div className={'col-7 ' + styles.LeftColumn}>
              <div className={styles.articles}>
                <h3> Witamy na nowej stronie sklepu! </h3>
                <div className={styles.photoContainer}>
                  <img
                    className={styles.photo}
                    src='https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                    alt=''
                  />
                </div>
                <div className={styles.flavourText}>
                  <p className={styles.description}>
                    Suspendisse accumsan at purus ultrices egestas. Quisque faucibus id
                    orci at pretium. Donec semper eu arcu non bibendum. Aenean et
                    pulvinar arcu. Donec efficitur interdum leo et aliquet. Phasellus
                    laoreet mauris vitae felis pharetra porttitor. Integer fringilla,
                    nunc eu faucibus laoreet, odio magna pretium libero, id sagittis
                    purus tellus eget ante. Morbi egestas gravida tellus quis volutpat.
                  </p>
                </div>
                <div className={styles.details}>
                  <div>
                    <span>
                      <FontAwesomeIcon className={styles.icons} icon={faCalendarAlt} />
                      21 Aug 2021
                    </span>
                    <span>
                      <FontAwesomeIcon className={styles.icons} icon={faComments} /> 4{' '}
                      Comments
                    </span>
                  </div>
                  <div className={styles.more}>
                    <p>Read more...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={'col-3 ' + styles.RightColumn}>
              <div className={styles.searchField}>
                <input placeholder='Search...' type='text' />
              </div>

              <div className={styles.RightColumnContainer}>
                <h5>Recent Posts</h5>
                <li>Products That Fight Static</li>
                <li>Finibus Bonorum et Malorum</li>
                <li>Aenean sit amet fermentum nulla</li>
                <li>Phasellus at tellus non lectus volutpat</li>
              </div>

              <div className={styles.RightColumnContainer}>
                <h5>Recent Comments</h5>
                <li>
                  <FontAwesomeIcon className={styles.icons} icon={faComments} />
                  Suspendisse accumsan at purus...
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icons} icon={faComments} />
                  Nam fringilla lorem et lectus...
                </li>
              </div>

              <div className={styles.RightColumnContainer}>
                <h5>Archives</h5>
                <li>
                  <FontAwesomeIcon className={styles.icons} icon={faCalendarAlt} />
                  25 Jun 2010
                </li>
              </div>

              <div className={styles.RightColumnContainer}>
                <h5>Categories</h5>
                <li>Furniture</li>
                <li>Chair</li>
                <li>Table</li>
                <li>Sofa</li>
                <li>Bedroom</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Blog.propTypes = {
//   blog: PropTypes.object,
// };

// ProductList.propTypes = {};

export default Blog;
