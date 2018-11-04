import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <h1>+</h1>
    </div>
  );
}

export default RightArrow;
