import React from 'react';

const PhotoStream = props => (
  <div>
    {props.photos.map((ele, index) => {
      if (index === 0) {
        return <img src={ele.url} className='big' onClick={() => props.view()}/>
      }

      if (index < 5) {
        return <img src={ele.url} className='small' onClick={() => props.view()}/>
      }
    })
    }
  </div>
);

export default PhotoStream;
