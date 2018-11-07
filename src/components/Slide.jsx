import React from 'react';

const Slide = ({ image, description }) => {
  return (
    <div className="slide">
      <div className='description'>{description}</div>
        <img src={image} className='slidePhoto' alt={description}></img>/>
    </div>
  )
}

export default Slide;
