import React from 'react';

const Photo = props => (
  <div className='side'>
    <img src={props.photo.url} onClick={() => props.view('slide', props.index)} className='sPhoto'/>
  </div>
)

export default Photo;
