import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotion from '../../features/Promotion/PromotionContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';


const Homepage = () => (
  <div className={styles.root}>
    <Promotion />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
