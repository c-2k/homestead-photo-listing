import React from 'react';

const Slide = ({ image, description, length, current }) => {
  return (
    <div className="slide">
        <img src={image} className='slidePhoto' alt={description}></img>
      <div className='description'>{current+=1}/{length}: {description}</div>
    </div>
  )
}

export default Slide;
