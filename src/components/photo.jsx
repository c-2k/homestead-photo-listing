import React from 'react';

const Photo = props => (
  <div className={`pho${props.index}`}>
    <img src={props.photo.url} onClick={() => props.view('slide', props.index)} className={`photo${props.index}`}/>
  </div>
)

export default Photo;
