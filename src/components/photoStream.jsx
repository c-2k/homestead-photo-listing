import React from 'react';
import Photo from './photo.jsx'

const PhotoStream = props => (
  <div className='container'>
  <div className='main'>
      {props.photos.map((ele, index) => {
        if(index===0){
          return <div>
            <Photo photo={ele} index={index} view={props.view}/>
          </div>
        }
    })
    }
  </div>
  <div className='sidePics'>
    {props.photos.map((ele, index) => {
      if (index > 0 && index < 5) {
        return <Photo photo={ele} index={index} view={props.view} />
      }
    })
    }
      <button onClick={() => props.view('slide')} className='viewPhoto'>View Photos</button>
  </div>
  </div>
);

export default PhotoStream;
