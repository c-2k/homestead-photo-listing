import React from 'react';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image.url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
  return (
    <div className="slide">
      <p>{image.description}</p>
      <div className='slidePic'>
        <img src={image.url} />
      </div>
    </div>
  )
}

export default Slide;
