import React from 'react';
import Photo from './photo.jsx'

const PhotoStream = props => (
  <div className>
      {props.photos.map((ele, index) => {
        if(index===0){
          return <div className='main'>
            <Photo photo={ele} index={index} view={props.view}/>
          </div>
        }
      if (index < 3) {
        return <div className='sideBar1'>
          <Photo photo={ele} index={index} view={props.view} />
        </div>
      }
      if (index < 5) {
        return <div className='sideBar2'>
          <Photo photo={ele} index={index} view={props.view} />
        </div>
      }
    })
    }
    <button onClick={()=>props.view('slide')}>View Photos</button>
  </div>
);

export default PhotoStream;
