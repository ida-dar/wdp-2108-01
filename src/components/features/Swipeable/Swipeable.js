import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = e => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = e => {
    if (touchStart - e.changedTouches[0].clientX > 0) {
      leftAction();
    } else {
      rightAction();
    }
  };

  return (
    <div
      onTouchStart={event => handleTouchStart(event)}
      onTouchEnd={event => handleTouchEnd(event)}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
  mouseEvents: PropTypes.bool,
};

export default Swipeable;
