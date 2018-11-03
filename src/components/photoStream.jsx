import React from 'react';
import Main from './mainPhoto.jsx';
import Side from './sidePhoto.jsx';

const PhotoStream = props => (
  <div className='container'>
  <div className='mainPic'>
      {props.photos.map((ele, index) => {
        if(index===0){
          return <div>
            <Main photo={ele} index={index} view={props.view}/>
          </div>
        }
    })
    }
  </div>
  <div className='sidePics'>
    {props.photos.map((ele, index) => {
      if (index > 0 && index < 5) {
        return <Side photo={ele} index={index} view={props.view} />
      }
    })
    }
      <button onClick={() => props.view('slide')} className='viewPhoto'>View Photos</button>
  </div>
  </div>
);

export default PhotoStream;
