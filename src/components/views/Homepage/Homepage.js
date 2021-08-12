import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotion from '../../features/Promotion/PromotionContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Brands from '../../layout/Brands/BrandsContainer';
import OnSpecial from '../../features/OnSpecial/OnSpecialContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promotion />
    <FeatureBoxes />
    <OnSpecial />
    <NewFurniture />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

export default Homepage;
