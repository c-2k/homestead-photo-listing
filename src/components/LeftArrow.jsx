import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <h1>-</h1>
    </div>
  );
}

export default LeftArrow;
