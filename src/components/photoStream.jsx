import React from 'react';

const PhotoStream = props => (
  <div className="container">
    {console.log('PHOTO IN PHOTOSTREAM',props.photo[0])}
    {props.photo.map((ele, index) => {

      if(index === 0) {
        return <img src={ele.url} className='big'/>
  }

      if(index<3) {
        return <img src={ele.url} className='top'/>
  }

      if (index < 5) {
        return <img src={ele.url}className='bottom'/>
      }
    })}
  </div>
);

export default PhotoStream;
