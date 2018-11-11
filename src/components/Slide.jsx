import React from 'react';

const Slide = ({ image, description }) => {
  return (
    <div className="slide">
        <img src={image} className='slidePhoto' alt={description}></img>
      <div className='description'>{description}</div>
    </div>
  )
}

export default Slide;
