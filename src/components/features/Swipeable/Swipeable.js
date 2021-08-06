import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [firstTouch, setfirstTouch] = useState(0);

  const handleTouchStart = e => {
    // Cache the client X
    setfirstTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = e => {
    //The first touch point in the changedTouches//keeps updating
    if (firstTouch - e.changedTouches[0].clientX > 0) {
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
